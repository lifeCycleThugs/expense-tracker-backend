import { ErrorGenerator } from "../utils/error-generator"
import { NextFunction, Request, Response } from "express"

export const errorHandler = (err: ErrorGenerator, req: Request, res: Response, next: NextFunction) => {

    if(err?.status && err?.message){
        res.status(err?.status).send(err);
    }
    else if(err?.message){
        res.status(500).send(err);
    }
    else {
        res.status(500).send('Something went wrong');
    }
    next()
}