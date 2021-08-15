import { Country } from "../models/Countries";
import { csvToJsonConvert } from "../utils/CsvToJsonConvert";
import { LanguagesController } from "./LanguagesController";



export class CountriesController {

    public static countries: Country[] = [];


    static async countriesSetData() {
        const jsonObj = await csvToJsonConvert.csvToJsonCountries();
        jsonObj.forEach(async (value) => {
            let languageData = LanguagesController.languagesGetData(value.Languages.split(","));
            const variab1 = new Country(value.Code, value.Name, value.Native, value.Phone, value.Continent, value.Capital, value.Currency, languageData);
            this.countries.push(variab1);
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