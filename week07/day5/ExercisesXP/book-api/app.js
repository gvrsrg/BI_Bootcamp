import express from "express";

const app = express();
app.use(express.json())

const PORT = 5000
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});


const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedYear: 1851
    }
];


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

    res.writeHead(201)
    res.end(JSON.stringify(newBook));

})




  