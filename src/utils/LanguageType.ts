import { GraphQLObjectType, GraphQLString } from 'graphql';


export const LanguageType = new GraphQLObjectType({
    name: "language",
    fields: () => ({
        code: { type: GraphQLString },
        name: { type: GraphQLString },
        native: { type: GraphQLString },
        rtf: { type: GraphQLString },
    }),
});