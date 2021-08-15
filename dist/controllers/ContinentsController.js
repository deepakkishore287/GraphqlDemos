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
exports.ContinentsController = void 0;
const Continents_1 = require("../models/Continents");
const CsvToJsonConvert_1 = require("../utils/CsvToJsonConvert");
class ContinentsController {
    static continentsSetData() {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonObj = yield CsvToJsonConvert_1.csvToJsonConvert.csvToJsonContinents();
            jsonObj.forEach(value => {
                const variab1 = new Continents_1.Continents(value.CODE, value.NAME);
                this.continents.push(variab1);
            });
        });
    }
}
exports.ContinentsController = ContinentsController;
ContinentsController.continents = [];
