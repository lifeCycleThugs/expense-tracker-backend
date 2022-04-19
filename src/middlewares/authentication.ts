import { NextFunction, Request, Response } from "express";
import { ErrorGenerator, JWT } from "../utils/index";

class AuthMiddleware {
    constructor(){

    }

    async authenticateJWT(req: Request, res: Response, next: NextFunction) {
        try {
            if(!req?.headers?.authorization?.startsWith('Bearer')){
                throw new Error('Improper token');
            }
            else if(!(req?.headers?.authorization)?.split(' ')[1]){
                throw new Error('No token found');
            }
            else {
                const bearerToken = (req?.headers?.authorization)?.split(' ')[1];
                const result  = await JWT.verifyToken(bearerToken);
                if(!result){
                    throw 'Invalid token'
                }
                next();
            }
        } catch (error: any) {
            return new ErrorGenerator(error.status, error.message)
        }
    }
}

export const authMiddleware = new AuthMiddleware()