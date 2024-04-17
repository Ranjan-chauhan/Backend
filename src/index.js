// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
    app.on("error",() =>{
        console.log("app is not able to talk to database ",error);
        throw error
    })
})
.catch((err) => {
    console.log("MONGO db connection Failed !!!",err);
})






/*
import { Express } from "express";
const app = Express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Eroor : ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);

        })

    } catch(error) {
        console.error("Error:", error)
        throw error
    }

}) ()     */
