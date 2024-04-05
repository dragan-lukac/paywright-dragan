export class CountriesRequest {

  readonly request: any;

  constructor(request: any) {
    this.request = request;
  }

  async getCountries() {
    const response = await this.request.post(
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





