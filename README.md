# graphql system

For Dev Env : npm run start-dev

browse to localhost:5000/graphql

query data:

    {
        country(code: "IN") {
            name
            native
            phone
            continent
            capital
            currency
            languages {
              code
              name
            }
        }
    }


Response data:

    {
      "data": {
        "country": {
          "name": "India",
          "native": "भारत",
          "phone": "91",
          "continent": "Asia",
          "capital": "New Delhi",
          "currency": "INR",
          "languages": [
            {
              "code": "hi",
              "name": "Hindi"
            },
            {
              "code": "en",
              "name": "English"
            }
          ]
        }
      }
    }