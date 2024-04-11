const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nivedpk21:nivedpk21@cluster0.cuiosip.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0"
);
const schema = mongoose.Schema;
const productSchema = new schema({
  productname: { type: String, index: true },
  category: { type: String, index: true },
  description: { type: String, index: true },
  images: { type: String },
  price: { type: Number },
  stockquantity: { type: Number },
  rating: { type: Number },
  ratingcount: { type: Number},

  sellerId: { type: mongoose.Types.ObjectId, ref: "login_tb" },
  status: { type: String },
});
productSchema.index({ productname: "text", category: "text", description: "text" });

const productModel = mongoose.model("product_tb", productSchema);
module.exports = productModel;
