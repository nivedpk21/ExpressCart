const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nivedpk21:nivedpk21@cluster0.cuiosip.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0"
);
const schema = mongoose.Schema;
const cartSchema = new schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user_tbs" },
  productId: { type: mongoose.Types.ObjectId, ref: "product_tbs" },
  quantity: { type: Number },

  status: { type: String },
});
const cartModel = mongoose.model("cart_tb", cartSchema);
module.exports = cartModel;
