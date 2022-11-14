const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config()

module.exports = async (req, res, next) => {
  const token = req.header('token');

  // Check if token exists
  if (!token) {
    return res.status(403).json('Not Authorize');
  }

  try {
    
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify.user;
    console.log('auth', req.user, verify)

  } catch (err) {
    console.error(err.message, 'Error: Error at authorization middleware');
    return res.status(403).json( {msg: 'Not Authorized'} );
  }
  next();
}
