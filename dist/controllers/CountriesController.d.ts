import { Country } from "../models/Countries";
export declare class CountriesController {
    static countries: Country[];
    static countriesSetData(): Promise<void>;
    static countriesGetData(): any[];
}
