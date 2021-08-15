"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
class Country {
    constructor(Code, Name, Native, Phone, Continent, Capital, Currency, Languages) {
        this.code = Code;
        this.name = Name;
        this.native = Native;
        this.phone = Phone;
        this.continent = Continent;
        this.capital = Capital;
        this.currency = Currency;
        this.languages = Languages;
    }
}
exports.Country = Country;
