const router = require('express').Router()
const pool = require('../models/db')

// Get all posts
router.get('/api/get/post', (req, res, next) => {
    const post_id = req.query.post_id
  
    pool.query(`SELECT * FROM posts
                WHERE pid=$1`, [ post_id ],
                (q_err, q_res) => {
                  res.json(q_res.rows)
        })
  } )


// Save posts to db
router.post('/api/post/posttodb', (req, res, next) => {
    const body_vector = String(req.body.body)
    const title_vector = String(req.body.title)
    const username_vector = String(req.body.username)
  
    const search_vector = [title_vector, body_vector, username_vector]
    const values = [req.body.title, req.body.body, search_vector, req.body.uid, req.body.username]
    pool.query(`INSERT INTO
                posts(title, body, search_vector, user_id, author, date_created)
                VALUES($1, $2, to_tsvector($3), $4, $5, NOW())`,
      values, (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    });
});

module.exports = router