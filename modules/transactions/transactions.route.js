const express = require("express");

const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");
const addExpense = require("./controllers/addExpense");
const getTransactions = require("./controllers/getTransactions");
const deleteTransaction = require("./controllers/deleteTransaction");
const editTransactions = require("./controllers/editTransaction");
const transactionRoutes = express.Router();

// Routes...

transactionRoutes.use(auth);

// Protected routes...

transactionRoutes.post("/addIncome", addIncome);
transactionRoutes.post("/addExpense", addExpense);
transactionRoutes.get("/", getTransactions);

transactionRoutes.delete("/:transaction_id", deleteTransaction);
transactionRoutes.patch("/", editTransactions);
module.exports = transactionRoutes;