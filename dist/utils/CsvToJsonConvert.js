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
exports.csvToJsonConvert = void 0;
const csv = require("csvtojson");
class csvToJsonConvert {
    static csvToJsonContinents() {
        return __awaiter(this, void 0, void 0, function* () {
            var jsonObj = yield csv().fromFile(this.csvContinentsFilePath);
            return jsonObj;
        });
    }
    static csvToJsonCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            var jsonObj = yield csv().fromFile(this.csvCountriesFilePath);
            return jsonObj;
        });
    }
    static csvToJsonLanguages() {
        return __awaiter(this, void 0, void 0, function* () {
            var jsonObj = yield csv().fromFile(this.csvLanguagesFilePath);
            return jsonObj;
        });
    }
}
exports.csvToJsonConvert = csvToJsonConvert;
csvToJsonConvert.csvContinentsFilePath = './public/continents.csv';
csvToJsonConvert.csvCountriesFilePath = './public/countries.csv';
csvToJsonConvert.csvLanguagesFilePath = './public/languages.csv';
