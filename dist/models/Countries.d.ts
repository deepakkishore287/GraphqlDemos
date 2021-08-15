import { Languages } from "./Languages";
export declare class Country {
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: string;
    capital: string;
    currency: string;
    languages: Languages[];
    constructor(Code: string, Name: string, Native: string, Phone: string, Continent: string, Capital: string, Currency: string, Languages: any[]);
}
