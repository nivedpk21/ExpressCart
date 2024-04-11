const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nivedpk21:nivedpk21@cluster0.cuiosip.mongodb.net/ecomDB?retryWrites=true&w=majority&appName=Cluster0"
);
const schema = mongoose.Schema;
const userSchema = new schema({
  name: { type: String },
  email: { type: String },
  phonenumber: { type: String },

  housename: { type: String },
  street: { type: String },
  town: { type: String },
  city: { type: String },
  district: { type: String },
  state: { type: String },
  pincode: { type: String },

  loginId: { type: mongoose.Types.ObjectId, ref: "login_tb" },
});
const userModel = mongoose.model("user_tb", userSchema);
module.exports = userModel;
