const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config({path: __dirname+'/.env'});

mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(()=>console.log("DB connection        succesfully"))
    .catch((err)=>{console.log(err)}
    );

app.use(express.urlencoded());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running");
});

//38:34