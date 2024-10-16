const express = require("express");
const register = require("./controllers/register");
const login = require("./controllers/login");
const auth = require("../../middleware/auth");
const userDashboard = require("./controllers/userDashboard");
const forgotPassword = require("./controllers/forgotPassword");
const resetPassword = require("./controllers/resetPassword");
const userRoutes = express.Router();
//routes..
userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/forgotpw", forgotPassword);
userRoutes.post("/resetpw", resetPassword);


userRoutes.use(auth);

//protected routes..
userRoutes.get("/dashboard",userDashboard);
module.exports = userRoutes;//exporting because it can be used in app.js