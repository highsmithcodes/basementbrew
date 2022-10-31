const router = require('express').Router()

const { v4: uuidv4 } = require('uuid')

const pool = require('../models/db')

router.post('/post/posttodb', async (req, res) => {
    try {
        const { title, body, user_id } = req.body
        const client = await pool.connect()
        let sql = "SELECT * FROM posts WHERE title=$1"
        const pid = uuidv4()
        sql = "INSERT INTO posts (pid,title,body,user_id) VALUES ($1,$2,$3,$4)"
        const { rowCount } = await client.query(sql, [pid, title, body, user_id])
        client.release()
        res.status(201).json({ message: `${rowCount} User Created` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})
module.exports = router