const express = require("express");
const sellerRouter = express.Router();
const bcryptjs = require("bcryptjs");
const loginModel = require("../models/loginModel");
const sellerModel = require("../models/sellerModel");
const checkAuth = require("../midleware/checkAuth");
const productModel = require("../models/productModel");
const multer = require("multer");
const cartModel = require("../models/cartModel");
const { default: mongoose } = require("mongoose");
const orderModel = require("../models/orderModel");

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    // console.log("originalname", file.originalname);
  },
});

const upload = multer({ storage: storage });

// seller signup
sellerRouter.post("/signup", upload.single("image"), async (req, res) => {
  const hashedPass = await bcryptjs.hash(req.body.password, 8);

  // const imagedetails = req.body.image;
  // console.log("image", imagedetails);

  const name = req.body.name;
  const Name = name.toLowerCase();
  const username = req.body.username;
  const Username = username.toLowerCase();

  const buissnessname = req.body.buissnessname;
  const Buissnessname = buissnessname.toLowerCase();
  const address = req.body.address;
  const Address = address.toLowerCase();
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
    const existingUsername = await loginModel.findOne({
      username: Username,
    });
    if (existingUsername != null) {
      return res.status(409).json({
        message: "username already registered",
      });
    }

    const existingPhonenumber = await sellerModel.findOne({
      phonenumber: req.body.phonenumber,
    });
    if (existingPhonenumber != null) {
      return res.status(409).json({
        message: "phonenumber already registered",
      });
    }

    const existingEmail = await sellerModel.findOne({
      email: req.body.email,
    });
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
        image: req.file.filename,

        address: Address,
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
    const sellerprofile = await sellerModel.findOne({
      loginId: userId,
    });
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
sellerRouter.post("/addproduct", upload.single("image"), checkAuth, async (req, res) => {
  const userId = req.userData.userId;
  console.log(req.body);
  try {
    const productData = {
      productname: req.body.productname,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      shippingcharge: req.body.shippingcharge,
      images: req.file.filename,
      stockquantity: 0,
      rating: 0,
      ratingcount: 0,

      sellerId: userId,
      status: 0,
    };
    console.log("productData", productData);
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

// manageproducts

sellerRouter.get("/manageproduct", checkAuth, async (req, res) => {
  const sellerId = req.userData.userId;

  try {
    const productData = await productModel.find({ sellerId: sellerId });
    if (productData) {
      return res.status(200).json({
        data: productData,
        message: "product data fetched successfully",
        success: true,
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// filter products (manageproducts)
sellerRouter.get("/filterproducts/:status", checkAuth, async (req, res) => {
  const sellerID = req.userData.userId;
  const status = req.params.status;

  try {
    const productData = await productModel.find({ sellerId: sellerID, status: status });
    if (productData) {
      return res.status(200).json({
        data: productData,
        message: "filtered data",
      });
    } else {
      return res.status(400).json({
        message: "no matching  results",
      });
    }
  } catch (error) {}
});

// view product
sellerRouter.get("/viewproduct/:id", checkAuth, async (req, res) => {
  const product_id = req.params.id;
  const seller_id = req.userData.userId;

  try {
    const productData = await productModel.findOne({ sellerId: seller_id, _id: product_id });
    if (productData) {
      return res.status(200).json({
        data: productData,
        message: "product data fetched successfully",
        success: true,
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// delete product
sellerRouter.get("/deleteproduct/:id", checkAuth, async (req, res) => {
  const id = req.params.id;
  const productId = new mongoose.Types.ObjectId(id);
  console.log("productId", productId);
  const sellerId = req.userData.userId;
  try {
    const deleteproduct = await productModel.deleteOne({
      sellerId: sellerId,
      _id: productId,
    });
    if (deleteproduct.deletedCount > 0) {
      return res.status(200).json({
        message: "product deleted successfully",
        sucess: "true",
        error: "false",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// add quantity
sellerRouter.post("/addquantity/:id", async (req, res) => {
  const productId = req.params.id;
  const quantity = parseInt(req.body.stockquantity);
  try {
    const addquantity = await productModel.findOneAndUpdate(
      { _id: productId },
      { $inc: { stockquantity: quantity } },
      { new: true }
    );
    if (addquantity) {
      return res.status(200).json({
        message: "stock quantity updated successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// manage orders
sellerRouter.get("/manageorder", checkAuth, async (req, res) => {
  const sellerID = req.userData.userId;
  console.log(sellerID);
  try {
    await orderModel
      .aggregate([
        {
          $lookup: {
            from: "user_tbs",
            localField: "userId",
            foreignField: "loginId",
            as: "userresult",
          },
        },
        {
          $unwind: "$userresult",
        },
        {
          $lookup: {
            from: "product_tbs",
            localField: "productId",
            foreignField: "_id",
            as: "productresult",
          },
        },
        {
          $unwind: "$productresult",
        },
        {
          $match: {
            "productresult.sellerId": new mongoose.Types.ObjectId(sellerID),
          },
        },
        {
          $group: {
            _id: "$_id",
            quantity: { $first: "$quantity" },
            status: { $first: "$status" },
            grandtotal: { $first: "$grandtotal" },
            payment: { $first: "$payment" },

            productId: { $first: "$productid" },
            productname: { $first: "$productresult.productname" },

            userId: { $first: "$userId" },
            name: { $first: "$userresult.name" },
            phonenumber: { $first: "$userresult.phonenumber" },
            housename: { $first: "$userresult.housename" },
            street: { $first: "$userresult.street" },
            town: { $first: "$userresult.town" },
            city: { $first: "$userresult.city" },
            district: { $first: "$userresult.district" },
            state: { $first: "$userresult.state" },
            pincode: { $first: "$userresult.pincode" },
          },
        },
      ])
      .then((orderData) => {
        return res.status(200).json({
          data: orderData,
          message: "order details",
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// filter order (manage order)
sellerRouter.get("/filterorder/:status", checkAuth, async (req, res) => {
  const sellerID = req.userData.userId;
  const status = req.params.status;
  try {
    await orderModel
      .aggregate([
        {
          $lookup: {
            from: "user_tbs",
            localField: "userId",
            foreignField: "loginId",
            as: "userresult",
          },
        },
        {
          $unwind: "$userresult",
        },
        {
          $lookup: {
            from: "product_tbs",
            localField: "productId",
            foreignField: "_id",
            as: "productresult",
          },
        },
        {
          $unwind: "$productresult",
        },
        {
          $match: {
            "productresult.sellerId": new mongoose.Types.ObjectId(sellerID),
            status: status,
          },
        },
        {
          $group: {
            _id: "$_id",
            quantity: { $first: "$quantity" },
            status: { $first: "$status" },
            grandtotal: { $first: "$grandtotal" },
            payment: { $first: "$payment" },

            productId: { $first: "$productid" },
            productname: { $first: "$productresult.productname" },

            userId: { $first: "$userId" },
            name: { $first: "$userresult.name" },
            phonenumber: { $first: "$userresult.phonenumber" },
            housename: { $first: "$userresult.housename" },
            street: { $first: "$userresult.street" },
            town: { $first: "$userresult.town" },
            city: { $first: "$userresult.city" },
            district: { $first: "$userresult.district" },
            state: { $first: "$userresult.state" },
            pincode: { $first: "$userresult.pincode" },
          },
        },
      ])
      .then((orderData) => {
        return res.status(200).json({
          data: orderData,
          message: "filtered order details",
        });
      });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});
// order Details
sellerRouter.get("/orderdetails/:id", async (req, res) => {
  const orderID = req.params.id;
  try {
    await orderModel
      .aggregate([
        {
          $lookup: {
            from: "user_tbs",
            localField: "userId",
            foreignField: "loginId",
            as: "userresult",
          },
        },
        {
          $unwind: "$userresult",
        },
        {
          $lookup: {
            from: "product_tbs",
            localField: "productId",
            foreignField: "_id",
            as: "productresult",
          },
        },
        {
          $unwind: "$productresult",
        },
        {
          $match: {
            _id: new mongoose.Types.ObjectId(orderID),
          },
        },
        {
          $group: {
            _id: "$_id",
            quantity: { $first: "$quantity" },
            status: { $first: "$status" },
            grandtotal: { $first: "$grandtotal" },
            payment: { $first: "$payment" },

            productId: { $first: "$productid" },
            productname: { $first: "$productresult.productname" },

            userId: { $first: "$userId" },
            name: { $first: "$userresult.name" },
            phonenumber: { $first: "$userresult.phonenumber" },
            housename: { $first: "$userresult.housename" },
            street: { $first: "$userresult.street" },
            town: { $first: "$userresult.town" },
            city: { $first: "$userresult.city" },
            district: { $first: "$userresult.district" },
            state: { $first: "$userresult.state" },
            pincode: { $first: "$userresult.pincode" },
          },
        },
      ])
      .then((orderData) => {
        return res.status(200).json({
          data: orderData[0],
          message: "order details",
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

//  order status
sellerRouter.post("/orderstatus/:id", async (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  const newStatus = req.body.status;
  console.log(newStatus);

  try {
    const cartData = await orderModel.findOneAndUpdate(
      { _id: ID },
      { $set: { status: newStatus } },
      { new: true }
    );
    if (cartData) {
      return res.status(200).json({
        message: "order status updated",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});

module.exports = sellerRouter;
