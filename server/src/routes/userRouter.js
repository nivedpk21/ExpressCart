const express = require("express");
const userRouter = express.Router();
const bcryptjs = require("bcryptjs");
const loginModel = require("../models/loginModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");
const checkAuth = require("../midleware/checkAuth");
const mongoose = require("mongoose");
const orderModel = require("../models/orderModel");
const reviewModel = require("../models/reviewModel");
const wishlistModel = require("../models/wishlistModel");
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

        housename: "",
        street: "",
        town: "",
        city: "",
        district: "",
        state: "",
        pincode: "",

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

// view profile
userRouter.get("/viewprofile", checkAuth, async (req, res) => {
  const userID = req.userData.userId;
  console.log(userID);
  try {
    const userData = await userModel.findOne({ loginId: userID });
    if (userData) {
      return res.status(200).json({
        data: userData,
        message: "user data fetched successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

// search result

userRouter.post("/searchproduct", async (req, res) => {
  console.log(req.body);

  const searchterm = req.body.searchterm;

  const priceData = req.body.price;
  const PRICE = parseInt(priceData);

  const rating = req.body.rating;
  const Rating = parseInt(rating);

  let priceFilter;
  if (PRICE === 1000) {
    priceFilter = { $text: { $search: searchterm }, price: { $lt: 1000 } };
  } else if (PRICE === 5000) {
    priceFilter = { $text: { $search: searchterm }, price: { $gte: 1000, $lt: 5000 } };
  } else if (PRICE === 10000) {
    priceFilter = { $text: { $search: searchterm }, price: { $gte: 5000, $lt: 10000 } };
  } else if (PRICE === 10001) {
    priceFilter = { $text: { $search: searchterm }, price: { $gte: 10000 } };
  } else {
    priceFilter = { $text: { $search: searchterm } };
  }

  try {
    const result = await productModel.find(priceFilter);
    if (result) {
      return res.status(200).json({
        data: result,
        message: "search result",
      });
    } else {
      return res.status(400).json({
        message: "no matching results",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

// filter search result

userRouter.post("/filtersearch", async (req, res) => {
  console.log(req.body);
  const PRICE = req.body.price;
  const TERM = req.body.searchterm;

  try {
    const result = await productModel.find({
      $text: { $search: TERM },
      price: { $lte: PRICE },
    });
    if (result) {
      return res.status(200).json({
        data: result,
        message: "filter result",
      });
    } else {
      return res.status(400).json({
        message: "no matching results",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

// view single product
userRouter.get("/viewproduct/:id", async (req, res) => {
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

// display product review in product page
userRouter.get("/productreview/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    await reviewModel
      .aggregate([
        {
          $lookup: {
            from: "user_tbs",
            localField: "userId",
            foreignField: "loginId",
            as: "result",
          },
        },
        {
          $unwind: "$result",
        },
        {
          $match: {
            productId: new mongoose.Types.ObjectId(productID),
          },
        },
        {
          $group: {
            _id: "$_id",
            review: { $first: "$review" },
            rating: { $first: "$rating" },
            name: { $first: "$result.name" },
          },
        },
      ])
      .then((reviewData) => {
        return res.status(200).json({
          data: reviewData,
          message: "product review fetched successfully",
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

// add to wishlist
userRouter.post("/addwishlist/:id", checkAuth, (req, res) => {
  const productId = req.params.id;
  const userID = req.userData.userId;
  console.log("id", userID);

  try {
    const wishlistData = {
      userId: userID,
      productId: productId,
      quantity: 1,
      status: "0",
    };
    const saveData = wishlistModel(wishlistData).save();
    if (saveData) {
      return res.status(200).json({
        message: "product added to wishlist",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});

// view wishlist
userRouter.get("/viewwishlist", checkAuth, async (req, res) => {
  const userID = req.userData.userId;
  console.log("userID", userID);
  try {
    await wishlistModel
      .aggregate([
        {
          $lookup: {
            from: "product_tbs",
            localField: "productId",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: "$result",
        },
        {
          $match: {
            status: "0",
            userId: new mongoose.Types.ObjectId(userID),
          },
        },
        {
          $group: {
            _id: "$_id",
            quantity: { $first: "$quantity" },
            productId: { $first: "$productId" },
            productname: { $first: "$result.productname" },
            price: { $first: "$result.price" },
          },
        },
      ])
      .then((wishlist) => {
        return res.status(200).json({
          data: wishlist,
          message: "details fetched successfully",
        });
      });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});

// remove from wishlist
userRouter.get("/removewishlist/:id", async (req, res) => {
  const productID = req.params.id;
  console.log("productID", productID);
  try {
    const deleteProduct = await wishlistModel.findOne({
      productId: new mongoose.Types.ObjectId(productID),
    });
    console.log("deleteProduct", deleteProduct);
    if (deleteProduct.deletecount > 0) {
      return res.status(200).json({
        message: "item removed from wishlist",
      });
    }
  } catch (error) {
    return res.status(200).json({
      message: "internal server error",
    });
  }
});

// add address
userRouter.post("/addaddress", checkAuth, async (req, res) => {
  const userID = req.userData.userId;
  console.log(userID);
  console.log(req.body);

  const House = req.body.housename;
  const Sreet = req.body.street;
  const Town = req.body.town;
  const City = req.body.city;
  const District = req.body.district;
  const State = req.body.state;
  const Pincode = req.body.pincode;

  try {
    const saveAddress = await userModel.findOneAndUpdate(
      { loginId: userID },
      {
        $set: {
          housename: House,
          street: Sreet,
          town: Town,
          city: City,
          district: District,
          state: State,
          pincode: Pincode,
        },
      },
      { new: true }
    );
    if (saveAddress) {
      console.log("saveAddress", saveAddress);
      return res.status(200).json({
        message: "address added successfully",
      });
    } else {
      console.log("saveAddress", saveAddress);
      return res.status(400).json({
        message: "unable to add address",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
});

// place order
userRouter.post("/placeorder", checkAuth, async (req, res) => {
  console.log("reqbody", req.body);
  const userID = req.userData.userId;
  const productID = req.body.productId;
  const quantity = req.body.quantity;
  const grandtotal = req.body.amount;

  try {
    const product = await productModel.findOne({ _id: productID });
    if (product) {
      product.stockquantity -= quantity;
    }
    const saveProduct = await product.save();
    if (saveProduct) {
      try {
        const orderData = {
          userId: userID,
          productId: productID,
          quantity: quantity,
          grandtotal: grandtotal,
          date: new Date(),
          status: "0",
        };
        const saveorder = await orderModel(orderData).save();
        if (saveorder) {
          return res.status(200).json({ message: "order placed" });
        }
      } catch (error) {
        return res.status(400).json({ message: "unable to update quntity" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// view order
userRouter.get("/vieworder", checkAuth, async (req, res) => {
  const userID = req.userData.userId;
  try {
    await orderModel
      .aggregate([
        {
          $lookup: {
            from: "product_tbs",
            localField: "productId",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: "$result",
        },
        {
          $match: {
            userId: new mongoose.Types.ObjectId(userID),
          },
        },
        {
          $group: {
            _id: "$_id",
            status: { $first: "$status" },
            productname: { $first: "$result.productname" },
          },
        },
      ])
      .then((orderdata) => {
        return res.status(200).json({
          data: orderdata,
          message: "order details fetched successfully",
        });
      });
  } catch (error) {
    console.log(error);
  }
});

// order details
userRouter.get("/orderdetails/:id", async (req, res) => {
  const orderID = req.params.id;

  try {
    await orderModel
      .aggregate([
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
          $match: {
            _id: new mongoose.Types.ObjectId(orderID),
          },
        },
        {
          $group: {
            _id: "$_id",
            status: { $first: "$status" },
            quantity: { $first: "$quantity" },
            grandtotal: { $first: "$grandtotal" },
            date: { $first: "$date" },

            productId: { $first: "$productId" },
            productname: { $first: "$productresult.productname" },
            description: { $first: "$productresult.description" },

            userId: { $first: "$userId" },
            name: { $first: "$userresult.name" },
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
      .then((orderDetails) => {
        return res.status(200).json({
          data: orderDetails[0],
          message: "details",
        });
      });
  } catch (error) {}
});

//  rate product
userRouter.post("/savereview/:id", checkAuth, async (req, res) => {
  const userId = req.userData.userId;
  const productId = req.params.id;
  const rating = parseInt(req.body.rating);
  console.log(req.body);

  try {
    const reviewData = {
      userId: userId,
      productId: productId,
      rating: rating,
      review: req.body.review,
    };
    const saveData = await reviewModel(reviewData).save();
    if (saveData) {
      try {
        const productData = await productModel.findOne({ _id: productId });
        if (productData) {
          const currentRating = productData.rating;
          console.log("currentRating", currentRating);
          const currentCount = productData.ratingcount;
          console.log("currentCount", currentCount);
          const totalRating = currentRating * currentCount;
          const updateCount = currentCount + 1;
          let newRating = Math.ceil((totalRating + reviewData.rating) / updateCount);
          console.log("hoi hoi", updateCount);
          console.log("hee hee", newRating);

          productData.rating = newRating;
          productData.ratingcount = updateCount;
          await productData.save();

          // await productModel.findOneAndUpdate(
          //   { _id: productId },
          //   { $set: { rating: newRating, ratingcount: updateCount } },
          //   { new: true }
          // );
          return res.status(200).json({
            message: "Review saved successfully",
          });
        } else {
          return res.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        console.error("Error updating product rating:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  } catch (error) {
    console.error("Error saving review:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = userRouter;
