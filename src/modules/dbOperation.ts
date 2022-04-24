import mongoose, {Model} from "mongoose";
import { ErrorGenerator } from "../utils/index";
const findAll = async (schemaName:Model<any>, keysToPopulate?: [string]) => {
    try {
        let result: any;
        if(keysToPopulate?.length){
            result = await schemaName.find({}).populate(keysToPopulate.join(','));
        } 
        else {
            result = await schemaName.find({});
        }
        return result
    } catch (error: any) {
        throw new ErrorGenerator(500, error?.message);
    }
}

const createNew = async (schemaName: Model<any>, body: any) => {
    try {
        const result = await schemaName.create(body);
        return result;
    } catch (error: any) {
        throw new ErrorGenerator(500, error.message);        
    }
}

export {
    findAll, createNew
}