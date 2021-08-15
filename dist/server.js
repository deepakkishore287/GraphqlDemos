"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const express_graphql_1 = require("express-graphql");
const ContinentsController_1 = require("./controllers/ContinentsController");
const CountriesController_1 = require("./controllers/CountriesController");
const LanguagesController_1 = require("./controllers/LanguagesController");
const Schemas_1 = require("./utils/Schemas");
class Server {
    constructor() {
        this.app = express();
        this.schema = Schemas_1.schema;
        this.SetData();
        this.setRoutes();
    }
    SetData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield ContinentsController_1.ContinentsController.continentsSetData();
            yield LanguagesController_1.LanguagesController.languagesSetData();
            yield CountriesController_1.CountriesController.countriesSetData();
        });
    }
    setRoutes() {
        this.app.use('/graphql', express_graphql_1.graphqlHTTP({
            schema: this.schema,
            graphiql: true,
        }));
    }
}
exports.Server = Server;
