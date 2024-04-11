const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nivedpk21:nivedpk21@cluster0.cuiosip.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0"
);
const schema = mongoose.Schema;
const orderschema = new schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user_tbs" },
  productId: { type: mongoose.Types.ObjectId, ref: "product" },
  quantity: { type: String },
  grandtotal: { type: String },
  payment: { type: String },
  date: { type: String },

  status: { type: String },
});
const orderModel = mongoose.model("order_tb", orderschema);
module.exports = orderModel;
