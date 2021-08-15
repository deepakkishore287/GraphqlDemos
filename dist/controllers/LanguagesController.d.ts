import { Languages } from "../models/Languages";
export declare class LanguagesController {
    static languages: Languages[];
    static languagesSetData(): Promise<void>;
    static languagesGetData(value: []): any[];
}
