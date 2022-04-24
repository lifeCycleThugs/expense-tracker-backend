import { Request } from "express";
import { addUser, findByEmail } from "./user.dal";
import { Login, Signup } from "./user.interfaces";
import bcrypt from 'bcrypt'

class UserController {
    constructor() { }
    loginUser = async (req: Request) => {
         try {
             const data:Login={email:req.body.email,password:req.body.password}
             const result =await findByEmail(data)
             return result
         } catch (error) {
             
         }
    }
    signUpUser = async (req: Request) => {
        req.body.passwordHash = bcrypt.hashSync(req.body.password, 5)
        console.log(req.body.passwordHash);
        
        try {
            const data: Signup = {
                name: req.body.name,
                email: req.body.email,
                passwordHash: req.body.passwordHash,
                phoneNumber: req.body.phoneNumber
            }
            const result = await addUser(data)
            return result
        } catch (error) {
            
        }
    } 
    
}

export const Controller = new UserController();
