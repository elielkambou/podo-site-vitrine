import { randomUUID } from "node:crypto";
import { contactSchema } from "@/src/lib/contact-schema";
import {
  checkRateLimit,
  contactConfigured,
  sendLead,
} from "@/src/lib/contact-server";

async function readSmallBody(request: Request): Promise<string | null> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 8192) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const merged = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
}

export async function POST(request: Request) {
  const requestId = randomUUID();
  const fail = (status: number, message: string) =>
    Response.json(
      { ok: false, message, requestId },
      { status, headers: { "Cache-Control": "no-store" } },
    );
  if (!contactConfigured())
    return fail(
      503,
      "Le formulaire de contact n’est pas disponible actuellement.",
    );
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return fail(415, "Format de requête non pris en charge.");
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin)
    return fail(403, "Origine de requête non autorisée.");
  if (Number(request.headers.get("content-length") || 0) > 8192)
    return fail(413, "Message trop volumineux.");
  let body: string | null;
  try {
    body = await readSmallBody(request);
  } catch {
    return fail(400, "Requête illisible.");
  }
  if (body === null) return fail(413, "Message trop volumineux.");
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return fail(400, "Données invalides.");
  }
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) return fail(400, "Vérifiez les champs du formulaire.");
  if (parsed.data.company_site_hidden) return fail(400, "Données invalides.");
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  try {
    const allowed = await checkRateLimit(
      `${ip}:${parsed.data.email.toLowerCase()}`,
    );
    if (!allowed)
      return fail(429, "Trop de demandes. Veuillez réessayer plus tard.");
    const accepted = await sendLead(parsed.data, requestId);
    if (!accepted)
      return fail(
        503,
        "L’envoi n’a pas pu être confirmé. Réessayez plus tard.",
      );
    return Response.json(
      { ok: true, requestId },
      { status: 202, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return fail(503, "Le service de contact est momentanément indisponible.");
  }
}
