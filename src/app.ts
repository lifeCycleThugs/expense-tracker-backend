import express, { Request, Response  } from "express";
import { config } from "dotenv";
import cors from "cors";
import './connections/mongodb'

config();
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('welcome to server');
})

app.use(cors())

app.get('/', (req: Request , res: Response) => {
    res.send('Api worked')
})