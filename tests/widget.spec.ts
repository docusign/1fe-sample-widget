import { test, expect } from "@playwright/test";

test.describe("Widget Tests", () => {
  test("playwright configuration is working", async ({ page }) => {
    // Simple test to verify Playwright is set up correctly
    await page.goto(
      "data:text/html,<html><head><title>Test Page</title></head><body><h1>Hello World</h1></body></html>",
    );
    await expect(page).toHaveTitle("Test Page");
    await expect(page.locator("h1")).toHaveText("Hello World");
  });

  test("should validate basic browser functionality", async ({ page }) => {
    // Test basic browser functionality with inline HTML
    await page.goto(
      'data:text/html,<html><head><title>Browser Test</title></head><body><div id="test">Playwright is working!</div></body></html>',
    );
    await expect(page.locator("#test")).toBeVisible();
    await expect(page.locator("#test")).toHaveText("Playwright is working!");
  });

  // TODO: Add widget-specific tests once dev server Node version is resolved
  test.skip("should load the widget", async ({ page }) => {
    await page.goto("/");

    // Wait for the widget to be mounted
    await expect(
      page.locator("text=My amazing component from app2 is mounted!"),
    ).toBeVisible();
  });
});
