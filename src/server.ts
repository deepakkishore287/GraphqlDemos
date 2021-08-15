import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { ContinentsController } from './controllers/ContinentsController';
import { CountriesController } from './controllers/CountriesController';
import { LanguagesController } from './controllers/LanguagesController';
import { schema } from './utils/Schemas';

export class Server {

  public testing: any;
  public app: express.Application = express();

  public schema = schema;

  constructor() {
    this.SetData();
    this.setRoutes();
  }

  public async SetData() {
    await ContinentsController.continentsSetData();
    await LanguagesController.languagesSetData();
    await CountriesController.countriesSetData();
  }

  setRoutes() {
    this.app.use('/graphql', graphqlHTTP({
      schema: this.schema,
      graphiql: true,
    }));
  }

}

