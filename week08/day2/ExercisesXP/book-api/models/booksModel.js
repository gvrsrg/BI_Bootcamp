const {db} = require("../config/db.js");

async function  _getAllBooks() {
  return await db("books")
    .select("id", "title", "author", "publishedYear")
    .orderBy("id");
}

async function _getABookById(bookId) {
  return await db("books")
    .select("id", "title", "author", "publishedYear")
    .where({ id: bookId });
}

async function _createABook(title, author, publishedYear) {
  return await db("books")
    .insert({ title, author, publishedYear })
    .returning(["id", "title", "author", "publishedYear"]);
}

module.exports = {
  _getAllBooks,
  _getABookById,
  _createABook,
};