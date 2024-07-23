const knex = require('knex')
require('dotenv').config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env


const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE
    }
})

module.exports = {
    db
}