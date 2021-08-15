import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { CountriesController } from '../controllers/CountriesController';
import { CountryType } from './CountryType';

const CountryData = (args: any) => {
    const countryData = CountriesController.countriesGetData().find(data => data.code == args.code);
    return countryData;
}

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        country: {
            type: CountryType,
            args: { code: { type: GraphQLString } },
            resolve: (parent, args) => {
                const result = CountryData(args);
                return result;
            }
        },
    },
});

export const schema = new GraphQLSchema({ query: RootQuery });

