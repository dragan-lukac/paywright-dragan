import { test, expect } from "@playwright/test";

test.describe("DemoBlaze UI tests", () => {
  test("Should be able to login", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

    await page.getByRole("link", { name: "Log in" }).click();
    await page.locator("#loginusername").click();
    await page.locator("#loginusername").fill("username");
    await page.locator("#loginusername").press("Tab");
    await page.locator("#loginpassword").fill("password");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(
      page.getByRole("link", { name: "PRODUCT STORE" })
    ).toBeVisible();
  });

  test("Should be able to send message to support team", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link", { name: "Contact" }).click();
    await page.locator("#recipient-email").click();
    await page.locator("#recipient-email").fill("something@email.com");
    await page.locator("#recipient-email").press("Tab");
    await page.getByLabel("Contact Email:").fill("To");
    await page.getByLabel("Contact Email:").click();
    await page.getByLabel("Contact Email:").fill("leonardo da vinci");
    await page
      .getByLabel("Message:")
      .fill("Why is my order taking so long to be delivered");
    await page.getByRole("button", { name: "Send message" }).click();
  });
});

test.describe("Graphql API tests", () => {
  test("Should be able to get details of all continents", async ({ request }) => {
    const response = await request.post(
      "https://countries.trevorblades.com/graphql",
      {
        data: {
          query: `
          query {
            continents {
              code
              name
            }
          }
        `,
        },
      }
    );
    expect(response.status()).toBe(200);
  });
});