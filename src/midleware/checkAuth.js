const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "this_is_an_encryption_key");
    req.userData = {
      username: decodedToken.UserName,
      userId: decodedToken.userId,
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Auth failed!" });
  }
};
