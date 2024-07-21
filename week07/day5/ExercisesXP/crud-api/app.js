import express from "express";
import { fetchPosts } from "./data/dataService.js";

const app = express();
app.use(express.json())

const PORT = 5000
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});



app.get("/api/posts", async (req, res) => {
    const posts = await fetchPosts();
    res.json(posts);
    console.log("Data has been retrieved")
})