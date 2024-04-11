const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nivedpk21:nivedpk21@cluster0.cuiosip.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0"
);
const schema = mongoose.Schema;
const productSchema = new schema({
  name: { type: String },
  category: { type: String },
  description: { type: String },
  images: { type: String },
  price: { type: String },

  sellerId: { type: mongoose.Types.ObjectId, ref: "login_tb" },
  status: { type: String },
});
const productModel = mongoose.model("product_tb", productSchema);
module.exports = productModel;
