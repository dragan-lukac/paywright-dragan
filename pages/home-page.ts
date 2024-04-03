import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginHeaderButton: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginWindowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginHeaderButton = page.getByRole("link", { name: "Log in" });
        this.usernameField = page.locator("#loginusername");
        this.passwordField = page.locator("#loginpassword");
        this.loginWindowButton = page.getByRole("button", { name: "Log in" });
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.demoblaze.com/');
    }


    async clickOnHeaderLoginButton() {
        await this.loginHeaderButton.click();
    }

    async insertCredentials(username: string, password: string) {
        await this.usernameField.clear();
        await this.usernameField.fill(username);
        await this.passwordField.clear();
        await this.passwordField.fill(password);
    }

    async clickOnLoginWindowButton() {
        await this.loginWindowButton.click();
    }
}