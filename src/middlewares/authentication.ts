import { NextFunction, Request, Response } from "express";
import { ErrorGenerator, JWT } from "../utils/index";

class AuthMiddleware {
    constructor(){}

    async authenticateJWT(req: Request, res: Response, next: NextFunction) {
        try {
            if(!req?.headers?.authorization?.startsWith('Bearer')){
                throw new ErrorGenerator(400, 'Improper token');
            }
            else if(!(req?.headers?.authorization)?.split(' ')[1]){
                throw new ErrorGenerator(401, 'No token found');
            }
            else {
                const bearerToken = (req?.headers?.authorization)?.split(' ')[1];
                const result  = await JWT.verifyToken(bearerToken);
                if(!result){
                    throw new ErrorGenerator(401, 'Invalid token')
                }
                next();
            }
        } catch (error: any) {
            throw new ErrorGenerator(error?.status || 500 , error?.message)
        }
    }
}

export const authMiddleware = new AuthMiddleware()