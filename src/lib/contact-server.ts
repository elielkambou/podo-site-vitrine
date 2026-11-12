import "server-only";
import { createHash } from "node:crypto";
import type { ContactLead } from "./contact-schema";
import { purposeLabels, roleLabels } from "./contact-schema";

export function contactConfigured() {
  return (
    process.env.CONTACT_FORM_ENABLED === "true" &&
    process.env.LEGAL_APPROVED === "true" &&
    Boolean(
      process.env.RESEND_API_KEY &&
      process.env.CONTACT_FROM_EMAIL &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.UPSTASH_REDIS_REST_URL &&
      process.env.UPSTASH_REDIS_REST_TOKEN &&
      process.env.RATE_LIMIT_SALT,
    )
  );
}

export async function checkRateLimit(identity: string): Promise<boolean> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const salt = process.env.RATE_LIMIT_SALT;
  if (!url || !token || !salt) return false;
  const key = `podo:contact:${createHash("sha256").update(`${salt}:${identity}`).digest("hex")}`;
  const response = await fetch(`${url.replace(/\/$/, "")}/multi-exec`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["SET", key, "0", "EX", "3600", "NX"],
      ["INCR", key],
    ]),
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) return false;
  const data: unknown = await response.json();
  return (
    Array.isArray(data) &&
    data.length === 2 &&
    typeof data[1]?.result === "number" &&
    data[1].result <= 5
  );
}

export async function sendLead(
  lead: ContactLead,
  requestId: string,
): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !from || !to) return false;
  const text = [
    `Demande PODO — ${requestId}`,
    `Date : ${new Date().toISOString()}`,
    `Nom : ${lead.name}`,
    `E-mail : ${lead.email}`,
    `Fonction : ${roleLabels[lead.role]}`,
    `Organisation : ${lead.organization || "Non renseignée"}`,
    `Motif : ${purposeLabels[lead.purpose]}`,
    "",
    "Message :",
    lead.message,
  ].join("\n");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "Idempotency-Key": requestId,
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `PODO — ${purposeLabels[lead.purpose]}`,
      text,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) return false;
  const data: unknown = await response.json();
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof data.id === "string"
  );
}
