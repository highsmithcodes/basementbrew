const router = require('express').Router()

const { v4: uuidv4 } = require('uuid')

const pool = require('../models/db')

router.post('/post/posttodb', async (req, res) => {
    try {
        const { title, body, id, username} = req.body
        const client = await pool.connect()
        let sql = "SELECT * FROM posts WHERE title=$1"
        const pid = uuidv4()
        sql = "INSERT INTO posts (title,body,id,username, date_created) VALUES ($1,$2,$3,$4,$5, NOW())"
        const { rowCount } = await client.query(sql, [pid, title, body, id, username])
        client.release()
        res.status(201).json({ message: `${rowCount} User Created` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// router.post('/api/post/posttodb', (req, res, next) => {
//     const body_vector = String(req.body.body)
//     const title_vector = String(req.body.title)
//     const username_vector = String(req.body.username)
  
//     const values = [req.body.title, req.body.body, search_vector, req.body.uid, req.body.username]
//     pool.query(`INSERT INTO
//                 posts(title, body, search_vector, user_id, author, date_created)
//                 VALUES($1, $2, to_tsvector($3), $4, $5, NOW())`,
//       values, (q_err, q_res) => {
//       if (q_err) return next(q_err);
//       res.json(q_res.rows);
//     });
//   });

  
module.exports = router