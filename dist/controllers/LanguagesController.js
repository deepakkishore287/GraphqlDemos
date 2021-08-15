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
exports.LanguagesController = void 0;
const Languages_1 = require("../models/Languages");
const CsvToJsonConvert_1 = require("../utils/CsvToJsonConvert");
class LanguagesController {
    static languagesSetData() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonObj = yield CsvToJsonConvert_1.csvToJsonConvert.csvToJsonLanguages();
            jsonObj.forEach(value => {
                const variab1 = new Languages_1.Languages(value.Code, value.Name, value.Native, value.Rtf);
                this.languages.push(variab1);
            });
        });
    }
    static languagesGetData(value) {
        var arrLanguage = [];
        value.forEach(datareq => {
            this.languages.forEach(datares => {
                if (datares.code == datareq) {
                    arrLanguage.push({ "code": datares.code, "name": datares.name, "native": datares.native, "rtf": datares.rtf });
                }
            });
        });
        return arrLanguage;
    }
}
exports.LanguagesController = LanguagesController;
LanguagesController.languages = [];
