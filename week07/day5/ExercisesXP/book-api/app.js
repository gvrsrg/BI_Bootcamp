import express from "express";
import { books } from "./books.js";

const app = express();
app.use(express.json())

const PORT = 5000
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});





app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
    const { bookId } = req.params;
    const book = books.find((item) => item.id == bookId);
    if (!book) return res.sendStatus(404);
    res.json(book);
});

app.post("/api/books", (req, res) => {
    const { title, author, publishedYear } = req.body;
    
    if (!title || !author || !publishedYear) return res.sendStatus(400);

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    }

    books.push(newBook);

    res.status(201).json(newBook);

})




  