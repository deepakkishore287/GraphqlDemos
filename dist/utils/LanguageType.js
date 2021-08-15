"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageType = void 0;
const graphql_1 = require("graphql");
exports.LanguageType = new graphql_1.GraphQLObjectType({
    name: "language",
    fields: () => ({
        code: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        native: { type: graphql_1.GraphQLString },
        rtf: { type: graphql_1.GraphQLString },
    }),
});
