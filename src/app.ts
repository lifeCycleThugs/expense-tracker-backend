import express, { Request, response, Response  } from "express";
import { config } from "dotenv";
import cors from "cors";
import './connections/mongodb'
import { errorHandler } from "./middlewares/index";
import { routes } from "./routes";
import bodyParser from 'body-parser';

config();
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('welcome to server');
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log(req.path);
    console.log(req.body);
    next();
  })
app.use('/api', routes);

app.use(errorHandler)
