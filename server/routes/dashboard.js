const router = require("express").Router();
const pool = require('../models/db');

router.get("/", async (req, res) => {
    try {

        //req.user has the payload
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [req.user])

        res.json(user.rows[0])

    } catch (err) {
        console.error(err.message);
        
        return res.status(500).json("Server error")
    } 
})

module.exports = router;