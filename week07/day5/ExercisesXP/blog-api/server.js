import express from "express";

const app = express();
app.use(express.json())


const PORT = 3000
app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});

const blogPosts = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      content: "JavaScript is a versatile programming language used primarily for web development. It allows developers to create dynamic and interactive web pages."
    },
    {
      id: 2,
      title: "Understanding Asynchronous Programming",
      content: "Asynchronous programming is a method of programming that allows for the execution of operations without blocking the main thread. This is particularly useful for tasks such as network requests and file operations."
    },
    {
      id: 3,
      title: "Getting Started with React",
      content: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components and manage the state of their applications efficiently."
    },
    {
      id: 4,
      title: "CSS Grid Layout: A Comprehensive Guide",
      content: "CSS Grid Layout is a powerful layout system available in CSS. It allows developers to create complex, responsive web layouts with ease. This guide covers the basics and advanced features of CSS Grid."
    },
    {
      id: 5,
      title: "Mastering Git and GitHub",
      content: "Git is a distributed version control system, and GitHub is a platform for hosting and collaborating on Git repositories. This post covers the essential commands and workflows for using Git and GitHub effectively."
    }
  ];

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
    const post = blogPosts.find((item) => item.id == id);
    if (!post) return res.sendStatus(404);
    blogPosts = blogPosts.filter((item) => item.id != id);
    res.sendStatus(204);

})
