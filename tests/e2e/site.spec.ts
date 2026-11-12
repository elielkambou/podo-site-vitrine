import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/solution",
  "/fonctionnement",
  "/mesures",
  "/pour-les-professionnels",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/accessibilite",
];

test("les pages publiques rendent un titre et les liens essentiels", async ({
  page,
}) => {
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(
      page.getByRole("link", { name: "Mentions légales" }),
    ).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
  }
});

test("menu mobile, FAQ et retour clavier", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  const menu = page.getByRole("button", { name: "Ouvrir le menu" });
  await menu.click();
  await expect(
    page.getByRole("navigation", { name: "Navigation mobile" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("navigation", { name: "Navigation mobile" }),
  ).toBeHidden();
  await expect(menu).toBeFocused();
  await page.goto("/faq");
  await page.getByText("PODO est-il disponible aujourd’hui ?").click();
  await expect(
    page.getByText(
      "Une application et des traitements de laboratoire existent",
      { exact: false },
    ),
  ).toBeVisible();
});

test("pas de débordement horizontal aux tailles essentielles", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `Débordement à ${width}px`).toBe(false);
  }
});

test("contact désactivé honnêtement sans configuration", async ({ page }) => {
  await page.goto("/contact");
  await expect(
    page.getByText("Aucun message ne peut encore être transmis", {
      exact: false,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Envoyer ma demande" }),
  ).toHaveCount(0);
});

test("404, API désactivée et robots privés", async ({ page, request }) => {
  const notFound = await page.goto("/page-inexistante");
  expect(notFound?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "Cette page n’existe pas." }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Retour à l’accueil" }),
  ).toBeVisible();
  const contact = await request.post("/api/contact", { data: {} });
  expect(contact.status()).toBe(503);
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
});

test("aucune violation axe bloquante sur accueil et contact", async ({
  page,
}) => {
  for (const route of ["/", "/contact"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, `Violations sur ${route}`).toEqual([]);
  }
});
