import { test, expect } from "@playwright/test";

test.describe("Login tests", () => {
test("Login with valid credentials", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link", { name: "Log in" }).click();
    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("username");
    await page.locator("#loginusername").press("Tab");
    await page.locator("#loginpassword").fill("password");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(
      page.getByRole("link", { name: "Log out" })
    ).toBeVisible();
  });

  test("Login with invalid credentials", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link", { name: "Log in" }).click();
    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("username");
    await page.locator("#loginusername").press("Tab");
    await page.locator("#loginpassword").fill("invalidPassword");
    await page.getByRole("button", { name: "Log in" }).click();
    page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });
    await expect(
      page.getByRole("link", { name: "Log in" })
    ).toBeVisible();
  });
});