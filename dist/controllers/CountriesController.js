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
exports.CountriesController = void 0;
const Countries_1 = require("../models/Countries");
const CsvToJsonConvert_1 = require("../utils/CsvToJsonConvert");
const LanguagesController_1 = require("./LanguagesController");
class CountriesController {
    static countriesSetData() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonObj = yield CsvToJsonConvert_1.csvToJsonConvert.csvToJsonCountries();
            jsonObj.forEach((value) => __awaiter(this, void 0, void 0, function* () {
                let languageData = LanguagesController_1.LanguagesController.languagesGetData(value.Languages.split(","));
                const variab1 = new Countries_1.Country(value.Code, value.Name, value.Native, value.Phone, value.Continent, value.Capital, value.Currency, languageData);
                this.countries.push(variab1);
            }));
        });
    }
    static countriesGetData() {
        var arrCountries = [];
        this.countries.forEach((value) => {
            arrCountries.push({
                "code": value.code,
                "name": value.name,
                "native": value.native,
                "phone": value.phone,
                "continent": value.continent,
                "capital": value.capital,
                "currency": value.currency,
                "languages": value.languages,
            });
        });
        return arrCountries;
    }
}
exports.CountriesController = CountriesController;
CountriesController.countries = [];
