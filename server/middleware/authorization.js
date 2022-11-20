const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not authorized");
    }
    // console.log("jwtToken", jwtToken);
    // We're throwing the errow because we are passing an undefined
    // token, we aren't logged in
    // So this authorization file is doing what it needs to do
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = payload.user;
    console.log(req.user);

    next();
  } catch (err) {
    console.log(err.message);
    return res.status(403).json("Not authorized");
  }
};