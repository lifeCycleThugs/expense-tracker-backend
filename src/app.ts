import express, { Request, Response  } from "express";
const dotenv =  require('dotenv').config();
const cors = require('cors');
import { ErrorGenerator } from "./utils/index";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('welcome to server');
})

app.use(cors())


app.get('/', (req: Request , res: Response) => {
    res.send('Api worked')
})