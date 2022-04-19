const mongoose = require('mongoose');
import { ErrorGenerator } from "../utils/index";
const findAll = async (schemaName:any, keysToPopulate?: [string]) => {
    try {
        let result: any;
        if(keysToPopulate?.length){
            result = await schemaName.find({}).populate(keysToPopulate.join(','))
        } 
        else {
            result = await schemaName.find({})
        }
        return result

    } catch (error: any) {
        return new ErrorGenerator(error.status, error.message);
    }
}

const createNew = async (schemaName: any, body: any) => {
    try {
        const result = schemaName.create(body)
        return  result
    } catch (error: any) {
        return new ErrorGenerator(error.status, error.message);        
    }
}