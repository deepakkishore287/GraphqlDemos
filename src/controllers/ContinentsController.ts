import { Continents } from "../models/Continents";
import { csvToJsonConvert } from "../utils/CsvToJsonConvert";



export class ContinentsController{

    public static continents: Continents[] = [];


    static async continentsSetData(){
        const jsonObj = await csvToJsonConvert.csvToJsonContinents();
        jsonObj.forEach(value => {
            const variab1 = new Continents(value.CODE, value.NAME);
            this.continents.push(variab1);
        });
    }
}