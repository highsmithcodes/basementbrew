const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    port: 5432,
    database: 'basement_brew'
})

module.exports = pool