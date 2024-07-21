import express from "express";
import { blogPosts } from "./posts.js";

const app = express();
app.use(express.json())


const PORT = 3000
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});


//   Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.


app.get("/posts", (req, res) => {
    res.json(blogPosts);
});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = blogPosts.find((item) => item.id == id);
    if (!post) return res.sendStatus(404);
    res.json(post);
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: blogPosts.length + 1,
        title,
        content
    };
    blogPosts.push(newPost);
    res.json(newPost);
});

app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = blogPosts.find((item) => item.id == id);
    if (!post) return res.sendStatus(404);
    post.title = title;
    post.content = content;
    res.json(post);
});

app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const postIndex = blogPosts.findIndex((item) => item.id == id);
    if (postIndex == -1) return res.sendStatus(404);
    blogPosts.splice(postIndex,1);
    res.sendStatus(204);

})
