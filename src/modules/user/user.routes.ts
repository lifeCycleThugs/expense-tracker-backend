import { Request, Response } from "express"
import { Controller } from "./user.controller"

let express = require('express')
export const router = express.Router()

router.route('/login')
    .post(async (req:Request, res:Response) => {
        try {
            const result = await Controller.loginUser(req)
            return res.status(200).json(result)
        } catch (error) {
            // add Error Generator
        }
})


router.route('/signup')
    .post(async (req: Request, res: Response) => {
        try {
            const result = await Controller.signUpUser(req)
            return res.status(200).json(result)
        } catch (error) {
            
        }
    })
