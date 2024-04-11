const express = require("express");
const sellerRouter = require("./sellerRouter");
const sellerModel = require("../models/sellerModel");
const loginModel = require("../models/loginModel");
const productModel = require("../models/productModel");
const adminRouter = express.Router();

// seller verification
adminRouter.get("/sellerverification", async (req, res) => {
  try {
    await sellerModel
      .aggregate([
        {
          $lookup: {
            from: "login_tbs",
            localField: "loginId",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: "$result",
        },
        {
          $match: {
            "result.status": "0",
            "result.role": "seller",
          },
        },
        {
          $group: {
            _id: "$_id",
            name: { $first: "$name" },
            username: { $first: "$result.username" },
            email: { $first: "$email" },
            phonenumber: { $first: "$phonenumber" },
            buissnessname: { $first: "$buissnessname" },

            buildingname: { $first: "$buildingname" },
            street: { $first: "$street" },
            town: { $first: "$town" },
            city: { $first: "$city" },
            district: { $first: "$district" },
            state: { $first: "$state" },
            pincode: { $first: "$pincode" },
            loginId: { $first: "$loginId" },
          },
        },
      ])
      .then((sellerData) => {
        return res.status(200).json({
          data: sellerData,
          message: "seller data fetched successfully",
          success: true,
          error: false,
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// seller approval
adminRouter.get("/approveseller", async (req, res) => {
  try {
    const updateSellerStatus = loginModel.findOneAndUpdate({ _id: loginId }, { $set: { status: "1" } });
    if (updateSellerStatus) {
      return res.status(200).json({ message: "seller status approved successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// list products
adminRouter.get("/listproducts", async (req, res) => {
  try {
    const Products = await productModel.find({ status: "0" });
    if (Products) {
      return res.status(200).json({
        data: Products,
        message: "products listed successfully",
        success: true,
        error: false,
      });
    }
  } catch (error) {}
});

// approve products
adminRouter.get("/approveproduct", async (req, res) => {
  try {
    const updateStatus = await productModel.findOneAndUpdate({ _id: Id }, { set: { status: "1" } });
    if (updateStatus) {
      return res.status(200).json({
        message: "product status approved successfully",
      });
    }
  } catch (error) {}
});

module.exports = adminRouter;
