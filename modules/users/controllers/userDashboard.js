const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const usersModel = mongoose.model("users");
  const transactionModel = mongoose.model("transactions");
  console.log(req.user);

  const getUser = await usersModel
    .findOne({
      _id: req.user._id,
    })
    .select("name balance email"); //query except -password use like thsi only use - to exclude
  const transactions = await transactionModel
    .find({
      user_id: req.user._id,
    })
    .sort("-createdAt")
    .limit(5);

  res.status(200).json({
    status: "success",
    data: getUser,
    transactions,
  });
};

module.exports = userDashboard;
