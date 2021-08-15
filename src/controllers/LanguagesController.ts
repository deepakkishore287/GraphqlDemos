import { Languages } from "../models/Languages";
import { csvToJsonConvert } from "../utils/CsvToJsonConvert";



export class LanguagesController {

    public static languages: Languages[] = [];

    static async languagesSetData() {
        const jsonObj = await csvToJsonConvert.csvToJsonLanguages();
        jsonObj.forEach(value => {
            const variab1 = new Languages(value.Code, value.Name, value.Native, value.Rtf);
            this.languages.push(variab1);
        });
    }

    static languagesGetData(value: []) {
        var arrLanguage = [];
        value.forEach(datareq => {
            this.languages.forEach(datares => {
                if (datares.code == datareq) {
                    arrLanguage.push({ "code": datares.code, "name": datares.name, "native": datares.native, "rtf": datares.rtf });
                }
            });
        })
        return arrLanguage;

    }
}

