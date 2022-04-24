import bodyParser, { json } from 'body-parser'
import express from 'express'
const userRouter = require('./modules/user/user.routes')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log("server is running");
    
})
