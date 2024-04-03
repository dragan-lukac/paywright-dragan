import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home-page";

test.describe("Login tests", () => {
  test("Login with valid credentials", async ({ page }) => {
    const homePage = new HomePage(page);
    homePage.navigateToHomePage();
    homePage.clickOnHeaderLoginButton();
    homePage.insertCredentials("username", "password");
    homePage.clickOnLoginWindowButton();
    await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  });

  test("Login with invalid credentials", async ({ page }) => {
    const homePage = new HomePage(page);
    homePage.navigateToHomePage();
    homePage.clickOnHeaderLoginButton();
    homePage.insertCredentials("invalidUsername", "invalidPassword");
    homePage.clickOnLoginWindowButton();
    await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  });
});