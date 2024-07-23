const knex = require('knex')
const dotenv = require('dotenv')

dotenv.config()

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
async function getVersion() {
    try{
        const version = await db.raw('select version()')
        console.log(version)
    }
    catch(err){
        console.log(err)
    }
    
}

db('products')
.select('id', 'name', 'price')
.where({id:12})
.then((rows) => {
    console.log(rows)
})
.catch((err) => {
    console.log(err)
});

db('products')
.update({name:"iPhone"})
.where({id:12})
.returning('*')
.then((rows) => {
    console.log(rows)
})
.catch((err) => {
    console.log(err)
});

// db('products')
// .insert([
//     {name:"iPhone 13", price: 1000},
//     {name:"iPhone 14", price: 1200}
// ], ['id', 'name']
// )
// .then((rows) => {
//     console.log(rows)
// })
// .catch((err) => {
//     console.log(err)
// });

const id = 14

db.raw('select * from products where id=?', id)
.then((rows) => {
    console.log(rows)
})
.catch((err) => {
    console.log(err)
})
.finally()

;
