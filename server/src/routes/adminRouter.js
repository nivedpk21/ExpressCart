const express = require("express");
const sellerModel = require("../models/sellerModel");
const loginModel = require("../models/loginModel");
const productModel = require("../models/productModel");
const { default: mongoose } = require("mongoose");
const adminRouter = express.Router();
const userModel = require("../models/userModel");

// seller details
adminRouter.get("/sellerdetails", async (req, res) => {
  try {
    await loginModel
      .aggregate([
        {
          $lookup: {
            from: "seller_tbs",
            localField: "_id",
            foreignField: "loginId",
            as: "result",
          },
        },
        {
          $unwind: "$result",
        },
        {
          $match: {
            role: "seller",
            status: "0",
          },
        },
        {
          $group: {
            _id: "$_id",
            name: { $first: "$result.name" },
            buissnessname: { $first: "$result.buissnessname" },
            city: { $first: "$result.city" },
            loginId: { $first: "$_id" },
          },
        },
      ])
      .then((sellerDetails) => {
        return res.status(200).json({
          data: sellerDetails,
          message: "seller details fetched successfully",
          success: true,
          error: false,
        });
      });
  } catch (error) {
    console.log(error);
  }
});

// seller profile
adminRouter.get("/sellerprofile/:id", async (req, res) => {
  const sellerId = req.params.id;
  console.log("sellerId", sellerId);
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
            loginId: new mongoose.Types.ObjectId(sellerId),
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
          data: sellerData[0],
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
adminRouter.get("/approveseller/:id", async (req, res) => {
  const Id = req.params.id;
  console.log("id", Id);
  try {
    const updateSellerStatus = await loginModel.findOneAndUpdate(
      { _id: Id },
      { $set: { status: "1" } },
      { new: true }
    );
    console.log("updateSellerStatus", updateSellerStatus);
    if (updateSellerStatus) {
      return res.status(200).json({
        message: "seller status approved successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// list products
adminRouter.get("/approveproduct", async (req, res) => {
  try {
    const Products = await productModel.find({
      status: "0",
    });
    if (Products) {
      return res.status(200).json({
        data: Products,
        message: "products listed successfully",
        success: true,
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// view single product
adminRouter.get("/viewproduct/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    const productData = await productModel.findOne({ _id: productID });
    if (productData) {
      return res.status(200).json({
        data: productData,
        message: "product details fetched successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res;
  }
});

// approve products
adminRouter.get("/updateproductstatus/:id", async (req, res) => {
  const ID = req.params.id;
  console.log("IDD", ID);
  try {
    const updateStatus = await productModel.findOneAndUpdate(
      { _id: ID },
      { $set: { status: "1" } },
      { new: true }
    );
    if (updateStatus) {
      return res.status(200).json({
        message: "product  approved successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// user number
adminRouter.get("/totalusers", async (req, res) => {
  try {
    const totalUsers = await userModel.countDocuments();
    if (totalUsers) {
      return res.status(200).json({
        data: totalUsers,
        message: "total users",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// user number
adminRouter.get("/totalusers", async (req, res) => {
  try {
    const totalUsers = await userModel.countDocuments();
    if (totalUsers) {
      return res.status(200).json({
        data: totalUsers,
        message: "total users",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// seller number
adminRouter.get("/totalseller", async (req, res) => {
  try {
    const totalseller = await sellerModel.countDocuments();
    if (totalseller) {
      return res.status(200).json({
        data: totalseller,
        message: "total sellers",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// product number
adminRouter.get("/totalproduct", async (req, res) => {
  try {
    const totalproduct = await productModel.countDocuments();
    if (totalproduct) {
      return res.status(200).json({
        data: totalproduct,
        message: "totalproduct",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = adminRouter;
