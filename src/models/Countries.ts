import { Languages } from "./Languages";


export class Country {
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: string;
    capital:string;
    currency: string;
    languages: Languages[];

    constructor(Code: string, Name: string, Native: string, Phone: string, Continent: string, Capital: string, Currency: string, Languages: any[]) {
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