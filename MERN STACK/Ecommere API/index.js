const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");




mongoose.connect(process.env.Mongo_url
).then(()=>{
    console.log("db connected")
}).catch((err)=>{console.log(err)});

app.use(cors());
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

app.listen(process.env.port || 5000 , ()=>{
    console.log("running")
})