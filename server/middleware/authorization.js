const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not authorized");
    }
    console.log(process.env.JWT_SECRET);
    console.log(jwtToken)
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
  
    req.user = payload;
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(403).json("Not authorized");
  }
};