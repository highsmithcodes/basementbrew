const express = require('express');
const pool = require('../models/db.js');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator.js');
const validInfo = require('../middleware/validinfo.js');
const authorization = require('../middleware/authorization.js');

const router = express.Router();
//registering
router.post('/register', validInfo, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);

    if (user.rows.length !== 0) {
      return res.status(401).send('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    console.log(bcryptPassword)
    const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) Values ($1, $2, $3) RETURNING *", [ name, email, bcryptPassword ]);

    const token = jwtGenerator(newUser.rows[0].user_id)
    res.json({ token });

  //step 5 generating our jwt token

  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
});

//login route

router.post('/login', validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [ email ]);

    if(user.rows.length === 0) {
      return res.status(401).send('Password or email is incorrect');
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    if(!validPassword) {
      return res.status(401).json('Password or Email is incorrect');
    }

    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token, id: user.rows[0].user_id });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/is-verify', authorization, async (req,res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;