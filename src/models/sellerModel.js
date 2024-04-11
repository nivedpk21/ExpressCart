const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nivedpk21:nivedpk21@cluster0.cuiosip.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0"
);

const schema = mongoose.Schema;
const sellerSchema = new schema({
  name: { type: String },
  buissnessname: { type: String },
  email: { type: String },
  phonenumber: { type: String },

  buildingname: { type: String },
  street: { type: String },
  town: { type: String },
  city: { type: String },
  district: { type: String },
  state: { type: String },
  pincode: { type: String },

  status: { type: String },
  loginId: { type: mongoose.Types.ObjectId, ref: "login_tbs" },
});
const sellerModel = mongoose.model("seller_tb", sellerSchema);
module.exports = sellerModel;
