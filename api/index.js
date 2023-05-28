const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({path: __dirname+'/.env'});
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
// const cartRoute = require("./routes/stripe")
const cors = require('cors')


mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(()=>console.log("DB connection        succesfully"))
    .catch((err)=>{console.log(err)}
    );
app.use(cors())
app.use(express.urlencoded());
app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running");
});

//38:34