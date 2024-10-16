const mongoose = require("mongoose");

const validator = require("validator");

const editTransactions = async(req,res) =>{
    const usersModel = mongoose.model("users");
    const { transaction_id,remarks} = req.body;
    if(!transaction_id) throw "transaction required";
    if (!validator.isMongoId(transaction_id.toString()))
        throw "Please provide a valid id!";

    const getTransaction = await transactionModel.findOne({
        _id: transaction_id,
      });
    
      if (!getTransaction) throw "Transaction not found!";



await transactionsModel.updateOne({
    _id:transaction_id,

},{
    remarks
   
},{
    runValidators:true,
});

    res.status(200).json({
       status:"Edit Transaction" 
    })
};
module.exports = editTransactions;