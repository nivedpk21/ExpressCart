const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const userRouter = require("./src/routes/userRouter");
const sellerRouter = require("./src/routes/sellerRouter");
const adminRouter = require("./src/routes/adminRouter");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.use("/admin", adminRouter);


app.listen(4000, () => {
  console.log("server started");
});
