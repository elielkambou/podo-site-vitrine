import { describe, expect, it, vi, beforeEach } from "vitest";
import { contactSchema } from "@/src/lib/contact-schema";

vi.mock("@/src/lib/contact-server", () => ({
  contactConfigured: vi.fn(() => true),
  checkRateLimit: vi.fn(async () => true),
  sendLead: vi.fn(async () => true),
}));
import { POST } from "@/app/api/contact/route";
import {
  checkRateLimit,
  contactConfigured,
  sendLead,
} from "@/src/lib/contact-server";

const valid = {
  name: "Marie Exemple",
  email: "marie@example.org",
  role: "podo",
  purpose: "retour",
  organization: "Cabinet fictif",
  message: "Je souhaite discuter des mesures de longueur.",
  company_site_hidden: "",
};
function request(body: unknown, headers: Record<string, string> = {}) {
  return new Request("https://podo.example/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://podo.example",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}
beforeEach(() => {
  vi.mocked(contactConfigured).mockReturnValue(true);
  vi.mocked(checkRateLimit).mockResolvedValue(true);
  vi.mocked(sendLead).mockResolvedValue(true);
});
describe("formulaire professionnel", () => {
  it("valide les champs sans accepter de données supplémentaires", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
    expect(
      contactSchema.safeParse({ ...valid, email: "invalide" }).success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({ ...valid, patient: "fiction" }).success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({ ...valid, message: "court" }).success,
    ).toBe(false);
  });
  it("refuse explicitement un service non configuré", async () => {
    vi.mocked(contactConfigured).mockReturnValue(false);
    const response = await POST(request(valid));
    expect(response.status).toBe(503);
    expect(sendLead).not.toHaveBeenCalled();
  });
  it("ne confirme le succès qu’après acceptation par le fournisseur", async () => {
    vi.mocked(sendLead).mockResolvedValue(false);
    expect((await POST(request(valid))).status).toBe(503);
    vi.mocked(sendLead).mockResolvedValue(true);
    const response = await POST(request(valid));
    expect(response.status).toBe(202);
    expect((await response.json()).ok).toBe(true);
  });
  it("rejette origine étrangère, honeypot et limitation", async () => {
    expect(
      (await POST(request(valid, { Origin: "https://ailleurs.example" })))
        .status,
    ).toBe(403);
    expect(
      (await POST(request({ ...valid, company_site_hidden: "robot" }))).status,
    ).toBe(400);
    vi.mocked(checkRateLimit).mockResolvedValue(false);
    expect((await POST(request(valid))).status).toBe(429);
  });
  it("rejette un corps volumineux et un format inattendu", async () => {
    expect(
      (await POST(request({ ...valid, message: "x".repeat(9000) }))).status,
    ).toBe(413);
    expect(
      (await POST(request(valid, { "Content-Type": "text/plain" }))).status,
    ).toBe(415);
  });
});
