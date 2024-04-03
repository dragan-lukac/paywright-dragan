import { test, expect } from "@playwright/test";
import { CountriesRequest } from "../../request/countries-request";

test.describe("Country Api tests", () => {
    test.only("I should be able to get all the countries", async ({ request }) => {
        const countriesRequest = new CountriesRequest();
        const response = await countriesRequest.getCountries(request);
        expect(response.status()).toBe(200);
    });
});