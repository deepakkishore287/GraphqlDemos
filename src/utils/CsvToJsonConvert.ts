import * as csv from 'csvtojson';

export class csvToJsonConvert {

    public static csvContinentsFilePath: string = './public/continents.csv';
    public static csvCountriesFilePath: string = './public/countries.csv';
    public static csvLanguagesFilePath: string = './public/languages.csv';

    static async csvToJsonContinents() {
        var jsonObj = await csv().fromFile(this.csvContinentsFilePath);
        return jsonObj;
    }

    static async csvToJsonCountries() {
        var jsonObj = await csv().fromFile(this.csvCountriesFilePath);
        return jsonObj;

    }

    static async csvToJsonLanguages() {
        var jsonObj = await csv().fromFile(this.csvLanguagesFilePath);
        return jsonObj;

    }

}














