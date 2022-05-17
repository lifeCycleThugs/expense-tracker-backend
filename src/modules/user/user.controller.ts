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
        try {
            const { firstName, lastName, email, password } = req.body;
            if (!firstName || !lastName || !email || !password) {
                return { error: 'Missing parameters' };
            }
            const passwordHash = bcrypt.hashSync(password, 5)
            const data: Signup = {
                firstName,
                lastName,
                email,
                passwordHash,
            }
            const result = await addUser(data);
            console.log('result', result);
            return result;
        } catch (error) {
            
        }
    } 
    
}

export const Controller = new UserController();
