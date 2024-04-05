import { test, expect } from "@playwright/test";
import { CountriesRequest } from "../../request/countries-request";

test.describe("Country Api tests", () => {
    test("I should be able to get all the countries", async ({ request }) => {
        const countriesRequest = new CountriesRequest(request);
        const response = await countriesRequest.getCountries();
        expect(response.status()).toBe(200);
    });
});