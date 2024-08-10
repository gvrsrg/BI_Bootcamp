const { _getAllBooks, _getABookById, _createABook, } = require("../models/booksModel.js");

const getAllBooks = async (req, res) => {
    try {
        const books = await _getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getABookById = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await _getABookById(bookId);
        if (book.length == 0) {
            return res.status(404).json({ error: "Book not found." });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createABook = async (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res
          .status(400)
          .json({ error: "Title, author, and publishedYear cannot be empty." });
      }

    try {
        const book = await _createABook(title, author, publishedYear);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
        }
};

module.exports = {
    getAllBooks,
    getABookById,
    createABook,
};
