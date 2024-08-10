const express = require("express");

const { getAllBooks, getABookById, createABook, } = require("../controllers/booksController.js");

const bookRouter = express.Router();

bookRouter.get("", getAllBooks);
bookRouter.get("/:bookId", getABookById);
bookRouter.post("", createABook);

module.exports = {
    bookRouter,
}
