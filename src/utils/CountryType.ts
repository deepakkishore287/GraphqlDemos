import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { LanguageType } from './LanguageType';


export const CountryType = new GraphQLObjectType({
    name: "country",
    fields: () => ({
        code: { type: GraphQLString },
        name: { type: GraphQLString },
        native: { type: GraphQLString },
        phone: { type: GraphQLString },
        continent: { type: GraphQLString },
        capital: { type: GraphQLString },
        currency: { type: GraphQLString },
        languages: { type: new GraphQLList(LanguageType) },
    }),
});

