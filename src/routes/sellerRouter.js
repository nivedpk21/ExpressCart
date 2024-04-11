const express = require("express");
const sellerRouter = express.Router();
const bcryptjs = require("bcryptjs");
const loginModel = require("../models/loginModel");
const sellerModel = require("../models/sellerModel");
const checkAuth = require("../midleware/checkAuth");
const productModel = require("../models/productModel");

// seller signup
sellerRouter.post("/signup", async (req, res) => {
  const hashedPass = await bcryptjs.hash(req.body.password, 8);

  const name = req.body.name;
  const Name = name.toLowerCase();
  const username = req.body.username;
  const Username = username.toLowerCase();

  const buissnessname = req.body.buissnessname;
  const Buissnessname = buissnessname.toLowerCase();
  const buildingname = req.body.buildingname;
  const Buildingname = buildingname.toLowerCase();
  const street = req.body.street;
  const Street = street.toLowerCase();
  const town = req.body.town;
  const Town = town.toLowerCase();
  const city = req.body.city;
  const City = city.toLowerCase();
  const district = req.body.district;
  const District = district.toLowerCase();
  const state = req.body.state;
  const State = state.toLowerCase();
  try {
    const existingUsername = await loginModel.findOne({ username: Username });
    if (existingUsername != null) {
      return res.status(409).json({
        message: "username already registered",
      });
    }

    const existingPhonenumber = await sellerModel.findOne({ phonenumber: req.body.phonenumber });
    if (existingPhonenumber != null) {
      return res.status(409).json({ message: "phonenumber already registered" });
    }

    const existingEmail = await sellerModel.findOne({ email: req.body.email });
    if (existingEmail != null) {
      return res.status(409).json({ message: "email already regustered" });
    }

    const loginData = {
      username: Username,
      password: hashedPass,
      role: "seller",
      status: "0",
    };
    const saveLogin = await loginModel(loginData).save();
    if (saveLogin) {
      const sellerData = {
        name: Name,
        buissnessname: Buissnessname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,

        buildingname: Buildingname,
        street: Street,
        town: Town,
        city: City,
        district: District,
        state: State,
        pincode: req.body.pincode,

        loginId: saveLogin._id,
      };
      const saveSellerData = await sellerModel(sellerData).save();
      if (saveSellerData) {
        return res.status(200).json({
          message: "seller created",
          success: true,
          error: false,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// seller profile
sellerRouter.get("/viewprofile", checkAuth, async (req, res) => {
  const userId = req.userData.userId;
  try {
    const sellerprofile = await sellerModel.findOne({ loginId: userId });
    if (sellerprofile) {
      return res.status(200).json({
        data: sellerprofile,
        message: "seller details fetched successfully",
        success: true,
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// add product
sellerRouter.post("/addproduct", checkAuth, async (req, res) => {
  const userId = req.userData.userId;
  try {
    const productData = {
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      images: images,
      price: req.body.price,

      sellerId: userId,
      status: "0",
    };
    const saveProduct = await productModel(productData).save();
    if (saveProduct) {
      return res.status(200).json({
        message: "product submitted for approval",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

module.exports = sellerRouter;
