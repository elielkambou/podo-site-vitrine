"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactInput,
  roleLabels,
  purposeLabels,
} from "@/src/lib/contact-schema";

export function ContactForm() {
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "podo",
      purpose: "presentation",
      organization: "",
      message: "",
      company_site_hidden: "",
    },
  });
  async function submit(values: ContactInput) {
    setResult("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: unknown = await response.json();
      if (
        !response.ok ||
        typeof data !== "object" ||
        data === null ||
        !("ok" in data) ||
        data.ok !== true
      )
        throw new Error("Envoi non confirmé");
      setResult("success");
      reset();
    } catch {
      setResult("error");
    }
  }
  if (result === "success")
    return (
      <div className="form-success" role="status">
        <span aria-hidden="true">✓</span>
        <h3>Votre demande a été acceptée.</h3>
        <p>
          Le service d’envoi a confirmé sa prise en charge. Cela ne garantit pas
          encore la livraison dans la boîte de réception.
        </p>
        <button
          type="button"
          className="text-link"
          onClick={() => setResult("idle")}
        >
          Envoyer une autre demande →
        </button>
      </div>
    );
  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">
            Nom professionnel <span>*</span>
          </label>
          <input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="field-error">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">
            E-mail <span>*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="field-error">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="role">
            Votre activité <span>*</span>
          </label>
          <select id="role" {...register("role")}>
            {Object.entries(roleLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="purpose">
            Objet de la demande <span>*</span>
          </label>
          <select id="purpose" {...register("purpose")}>
            {Object.entries(purposeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="organization">
          Structure <span className="optional">facultatif</span>
        </label>
        <input
          id="organization"
          autoComplete="organization"
          aria-invalid={!!errors.organization}
          aria-describedby={
            errors.organization ? "organization-error" : undefined
          }
          {...register("organization")}
        />
        {errors.organization && (
          <p id="organization-error" className="field-error">
            {errors.organization.message}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="message">
          Votre message <span>*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          maxLength={2000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : "message-help"}
          {...register("message")}
        />
        <p id="message-help" className="field-help">
          Décrivez votre besoin métier. N’envoyez aucune donnée de patient.
        </p>
        {errors.message && (
          <p id="message-error" className="field-error">
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company_site_hidden">Site de société</label>
        <input
          id="company_site_hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_site_hidden")}
        />
      </div>
      <p className="privacy-note">
        Ces informations servent uniquement à répondre à votre demande
        professionnelle. Consultez notre{" "}
        <Link href="/confidentialite">notice de confidentialité</Link>.
      </p>
      {result === "error" && (
        <p className="form-error" role="alert">
          Votre message n’a pas pu être envoyé. Veuillez réessayer plus tard.
        </p>
      )}
      <button type="submit" className="button" disabled={isSubmitting}>
        {isSubmitting ? "Envoi de votre demande…" : "Envoyer ma demande"}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
