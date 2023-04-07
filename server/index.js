const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({path: __dirname+'/.env'});

mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(()=>console.log("DB connection        succesfully"))
    .catch((err)=>{console.log(err)}
    );

app.get("/api/test", ()=>{
    console.log("test is successfull")
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running");
});

//13:32