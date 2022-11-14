const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'F@stass1',
    port: 5432,
    database: 'basementbreew'
})

module.exports = pool