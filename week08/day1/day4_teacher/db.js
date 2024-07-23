const knex = require("knex");
const dotenv = require("dotenv");

dotenv.config();

// # Do not expose your Neon credentials to the browser

// const PGHOST = "ep-winter-shape-a2rbuxds.eu-central-1.aws.neon.tech"; // 'localhost' / '127.0.0.1'
// const PGDATABASE = "neondb"; // 'olympic'
// const PGUSER = "neondb_owner"; // 'postgres'
// const PGPASSWORD = "uQnRW9ozK5xX"; // '123456'
// const PGPORT = 5432; // 5433

// console.log(process.env.PGDATABASE);

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

async function getVersion() {
  try {
    const result = await db.raw("select version()");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
// getVersion();
/** select / where */
// db("products")
//   .select("id", "name", "price")
// //   .where('id','>', 11)
// .orderBy('name')
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db("products")
//   .where({ id: 11 })
//   .update({ name: "iPhone19", price:999 },["id","name"])

// //   .returning("*")
//   .then((result) => {
//     console.log(result);
//   });

// db("products")
//   .insert(
//     [
//       { name: "iPhone21", price: 8000 },
//       { name: "iPad21", price: 7000 },
//     ],
//     ["id", "name", "price"]
//   )
//   //   .returning(["id", "name", "price"])
//   .then((result) => {
//     console.log(result);
//   });

// db("products")
//   .where({ id: 12 })
//   .del()
//   .returning("*")
//   .then((res) => console.log(res));
const id = 14;
console.log("selEct * fRom products where id = ?");
db.raw("selEct * fRom products where id = ?", 14).then((res) => {
  console.log(res.rows);
});
