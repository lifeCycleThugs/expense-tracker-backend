import { ErrorGenerator } from "../utils/error-generator";
import mongoose from "mongoose";
import { config } from "dotenv";
config()
const connectionURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.lepfw.mongodb.net/expense-tracker?retryWrites=true&w=majority`

mongoose.connect(connectionURI)
.then(() => {
    console.log('Connected to DB');
})
.catch((err: Error) => {
    throw new ErrorGenerator(500, err?.message);
})