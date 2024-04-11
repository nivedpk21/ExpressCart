const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nivedpk21:nivedpk21@cluster0.cuiosip.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0"
);
const schema = mongoose.Schema;
const reviewSchema = new schema({
  productId: { type: mongoose.Types.ObjectId, ref: "product_tbs" },
  userId: { type: mongoose.Types.ObjectId, ref: "user_tbs" },
  review: { type: String },
  rating: { type: Number },
});
const reviewModel = mongoose.model("review_tb", reviewSchema);
module.exports = reviewModel;
