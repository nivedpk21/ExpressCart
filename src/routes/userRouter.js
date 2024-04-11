const express = require("express");
const userRouter = express.Router();
const bcryptjs = require("bcryptjs");
const loginModel = require("../models/loginModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

// user signup
userRouter.post("/signup", async (req, res) => {
  const hashedPass = await bcryptjs.hash(req.body.password, 8);

  const name = req.body.name;
  const Name = name.toLowerCase();
  const username = req.body.username;
  const Username = username.toLowerCase();
  // const housename = req.body.housename;
  // const Housename = housename.toLowerCase();
  // const street = req.body.street;
  // const Street = street.toLowerCase();
  // const town = req.body.town;
  // const Town = town.toLowerCase();
  // const city = req.body.city;
  // const City = city.toLowerCase();
  // const district = req.body.district;
  // const District = district.toLowerCase();
  // const state = req.body.state;
  // const State = state.toLowerCase();

  try {
    const existingUsername = await loginModel.findOne({ username: req.body.username });
    if (existingUsername != null) {
      return res.status(409).json({ message: "username already registered" });
    }

    const existingEmail = await userModel.findOne({ email: req.body.email });
    if (existingEmail != null) {
      return res.status(409).json({ message: "email already registered" });
    }

    const existingPhonenumber = await userModel.findOne({ phonenumber: req.body.phonenumber });
    if (existingPhonenumber != null) {
      return res.status(409).json({ message: "phonenumber already registered" });
    }

    const loginData = {
      username: Username,
      password: hashedPass,
      role: "user",
    };
    const saveLogin = await loginModel(loginData).save();

    if (saveLogin) {
      const userData = {
        name: Name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,

        // housename: Housename,
        // street: Street,
        // town: Town,
        // city: City,
        // district: District,
        // state: State,
        // pincode: req.body.pincode,

        loginId: saveLogin._id,
      };
      saveUser = await userModel(userData).save();
      if (saveUser) {
        return res.status(200).json({
          message: "user created successfully",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// user/seller/admin Login

userRouter.post("/signin", async (req, res) => {
  console.log(req.body.username);
  try {
    const existingUser = await loginModel.findOne({ username: req.body.username });
    if (!existingUser) {
      return res.status(400).json({ message: "user is not registered" });
    }

    const existingPassword = existingUser.password;
    const passwordCheck = await bcryptjs.compare(req.body.password, existingPassword);
    if (passwordCheck) {
      // token creation
      const token = jwt.sign(
        {
          UserName: existingUser.username,
          userId: existingUser._id,
        },
        "this_is_an_encryption_key",
        { expiresIn: "4h" }
      );
      return res.status(200).json({
        data: existingUser,
        token: token,
        message: "sign in success",
        success: true,
        error: false,
      });
    } else {
      return res.status(400).json({ message: "incorrect password", success: false, error: true });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

module.exports = userRouter;
