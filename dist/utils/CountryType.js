"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryType = void 0;
const graphql_1 = require("graphql");
const LanguageType_1 = require("./LanguageType");
exports.CountryType = new graphql_1.GraphQLObjectType({
    name: "country",
    fields: () => ({
        code: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        native: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        continent: { type: graphql_1.GraphQLString },
        capital: { type: graphql_1.GraphQLString },
        currency: { type: graphql_1.GraphQLString },
        languages: { type: new graphql_1.GraphQLList(LanguageType_1.LanguageType) },
    }),
});
