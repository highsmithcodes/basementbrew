const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config()

function jwtGenerator(user_id) {
  const payload = {
    id: user_id,
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1hr" })
}

module.exports = jwtGenerator;