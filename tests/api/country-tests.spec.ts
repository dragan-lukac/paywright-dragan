import { test, expect } from "@playwright/test";
import { CountriesRequest } from "../../request/countries-request";
import { SchemaHelper } from "../../util/schema-helper";


test.describe("Country Api tests", () => {
    test("I should be able to get all the countries, verify status code", async ({ request }) => {
        const countriesRequest = new CountriesRequest(request);
        const response = await countriesRequest.getCountries();
        expect(response.status()).toBe(200);
    });

    test("I should be able to get all the countries, veirfy schema", async ({ request }) => {
        const countriesRequest = new CountriesRequest(request);
        const response = await countriesRequest.getCountries();
        const schemaHelper = new SchemaHelper();
        schemaHelper.validateJsonSchema(response, 'data/countries-schema.json');
    });
});