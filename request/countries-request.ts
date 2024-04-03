import { request } from "@playwright/test";


export class CountriesRequest {

  constructor() {

  }

  async getCountries(request) {
    const response = await request.post(
      "https://countries.trevorblades.com/graphql",
      {
        data: {
          query: `
                query {
                    countries {
                      capital
                      code
                      currencies
                      currency
                        emoji
                      emojiU
                      name
                      native
                      phone
                      phones
                    }
                  }
              `,
        },
      }
    );
    return response;
  }
}





