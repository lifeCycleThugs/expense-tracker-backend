import express, { Request, response, Response  } from "express";
import { config } from "dotenv";
import cors from "cors";
import './connections/mongodb'
import { authMiddleware } from "./middlewares/authentication";
import { errorHandler } from "./middlewares/index";

config();
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('welcome to server');
})

app.use(cors())

app.get('/', authMiddleware.authenticateJWT ,(req: Request , res: Response) => {
    res.send('Api worked')
})

app.use(errorHandler)
