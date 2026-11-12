import { defineConfig, devices } from "@playwright/test";
const baseURL = process.env.SITE_TEST_URL || "http://localhost:3000";
export default defineConfig({
  testDir: "./tests/e2e",
  use: { baseURL, trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: process.env.SITE_TEST_URL
    ? undefined
    : {
        command: "corepack pnpm dev --hostname localhost",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 60000,
      },
});
