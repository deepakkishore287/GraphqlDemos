"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const CountriesController_1 = require("../controllers/CountriesController");
const CountryType_1 = require("./CountryType");
const CountryData = (args) => {
    const countryData = CountriesController_1.CountriesController.countriesGetData().find(data => data.code == args.code);
    return countryData;
};
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        country: {
            type: CountryType_1.CountryType,
            args: { code: { type: graphql_1.GraphQLString } },
            resolve: (parent, args) => {
                const result = CountryData(args);
                return result;
            }
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({ query: RootQuery });
