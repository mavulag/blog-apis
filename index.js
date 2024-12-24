import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// In-memory data store
let posts = [
    {
        id: 1,
        title: "The Rise of Decentralized Finance",
        content: "Bla.",
        author: "Alex Thompson",
        date: "2023-08-01T10:00:00Z",
    },
    {
        id: 2,
        title: "The Impact of Artificial Intelligence on modern Business",
        content: "Bla bla.",
        author: "mia Williams",
        date: "2023-08-05T14:30:00Z",
    },
    {
        id: 3,
        title: "Sustainable",
        content: "Bla bla bla.",
        author: "Samuel Green",
        date: "2023-08-10T09:15:00Z",
    },
]

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET All posts
// use: curl -X GET http://localhost:4000/posts
app.get("/blog/v1.0.0/posts", (req, res) => {
    res.status(200).json(posts);
});

// GET a specific post by ID
// use: curl -X GET http://localhost:4000/posts/{ID}
app.get("/blog/v1.0.0/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((p) => p.id === postId);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ error: "Post not found" });
    }
});

// POST a new post
// use: curl -X POST http://localhost:4000/post -H "Content-Type: application/json" -d '{ title: "new post title", content: "This is the content of the new post", author: "Mavula Geofrey", date: "2023-08-10T09:15:00Z", }'
app.post("/blog/v1.0.0/post", (req, res) => {
    const { title, content, author, date } = req.body;

    if (!title || !content || !author) {
        return res.status(400).json({ error: "Missing reqired fields" });
    }

    const newPost = {
        id: ++lastId,
        title,
        content,
        author,
        date: date || new Date().toISOString(),
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PATCH a post
// use: curl -X PATCH http://localhost:4000/post/{ID} -H "Content-Type: application/json" -d '{ author: "Mavula Geofrey" }'
app.patch("/blog/v1.0.0/post/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((p) => p.id === postId);

    if (post) {
        const { title, content, author, date } = req.body;
        if (title) post.title = title;
        if (content) post.content = content;
        if (author) post.author = author;
        if (date) post.date = date;
        res.status(200).json(post);
    } else {
        res.status(404).json({
            error: "Post not found"
        });
    }
});

// DELETE a specific post
// use: curl -X DELETE http://localhost:4000/post/{ID}
app.delete("/blog/v1.0.0/post/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === postId);
    // console.log(postIndex);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(200).json({ message: "Post deleted successfully" });
    } else {
        res.status(404).json({ error: "Post not found" });
    }
})

app.listen(PORT, () => {
    console.log(`API is running at http://localhost:${PORT}`);
});