const knex = require('knex')
require('dotenv').config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD} = process.env
const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE
    }
})

module.exports = {
    db
}