import { config, DotenvParseOutput } from "dotenv";

export class ConfigServiece {
    #config;
    constructor(){
        const {err, parsed} = config();
        if(err){
            throw new Error("Не найден файл .env");
        }
        if(!parsed){
            throw new Error("Пустой файл .env");
        }
        this.config = parsed;
    }
    get(key){
        const res = this.config[key];
        if(!res){
            throw new Error("Нет такого ключа");
        }
        return res;
    }
}