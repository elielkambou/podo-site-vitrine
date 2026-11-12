// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/src/components/contact-form";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("interface de contact", () => {
  it("refuse les champs vides sans lancer d’envoi", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    render(<ContactForm />);
    await userEvent.click(
      screen.getByRole("button", { name: /Envoyer ma demande/i }),
    );
    expect(
      await screen.findByText("Indiquez votre nom professionnel."),
    ).toBeTruthy();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("affiche l’échec puis confirme seulement une acceptation serveur", async () => {
    const user = userEvent.setup();
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ ok: false }), { status: 503 }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ ok: true, requestId: "demo" }), {
          status: 202,
        }),
      );
    vi.stubGlobal("fetch", fetchMock);
    render(<ContactForm />);
    await user.type(
      screen.getByLabelText(/Nom professionnel/i),
      "Marie Exemple",
    );
    await user.type(screen.getByLabelText(/^E-mail/i), "marie@example.org");
    await user.type(
      screen.getByLabelText(/Votre message/i),
      "Je souhaite discuter des mesures étudiées.",
    );
    await user.click(
      screen.getByRole("button", { name: /Envoyer ma demande/i }),
    );
    expect(await screen.findByRole("alert")).toBeTruthy();
    expect(screen.queryByText("Votre demande a été acceptée.")).toBeNull();
    await user.click(
      screen.getByRole("button", { name: /Envoyer ma demande/i }),
    );
    await waitFor(() =>
      expect(screen.getByText("Votre demande a été acceptée.")).toBeTruthy(),
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
