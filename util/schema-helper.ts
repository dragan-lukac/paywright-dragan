import { expect } from "@playwright/test";
import Ajv from "ajv";
import fs from 'fs';

export class SchemaHelper {
    constructor() {}

    async validateJsonSchema(response, jsonScemaPath: string) {
        const responseBody = await response.json();
        const existingSchema = fs.readFileSync(jsonScemaPath, 'utf-8');
        const ajv = new Ajv();
        const schema = JSON.parse(existingSchema);
        const validate = ajv.compile(schema);
        const isValid = validate(responseBody);

        if(!isValid){
            console.log(JSON.stringify(validate.errors));
        }
        expect(isValid).toBe(true);
    }
}