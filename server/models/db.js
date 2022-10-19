const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'F@stass1',
    port: 5432,
    database: 'basement_brew'
})

module.exports = pool