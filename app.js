require("express-async-errors");

const express =  require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");
const userRoutes = require("./modules/users/users.routes");
const transactionRoutes = require("./modules/transactions/transactions.route");
require("dotenv").config();

const app=express();
app.use(cors);//connect backend and frontend


mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Mongo connection successful!");
  })
  .catch(() => {
    console.log("Mongo connection failed!");
  });


//models intialization
require("./models/users.models");
require("./models/transactions.model");
app.use(express.json());


//routes..
app.use("/api/users",userRoutes);
app.use("/api/transactions",transactionRoutes);


app.all("*",(req,res,next) =>{
res.status(404).json({
status:"failed",
message:"not found"
});
});

//end of all routes..

app.use(errorHandler);

app.listen(8000, () => {
    console.log("Server started successfully!");
  });