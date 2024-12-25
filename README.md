Blog API

This is a simple Blog API built using Node.js and Express. The API allows you to perform CRUD operations on blog posts, including creating, retrieving, updating, and deleting posts.


---

Features

Retrieve all blog posts.

Retrieve a specific post by ID.

Create a new blog post.

Update a blog post (partial updates supported).

Delete a blog post.



---

Technologies Used

Node.js: JavaScript runtime.

Express: Web application framework.

Body-parser: Middleware for parsing JSON and URL-encoded data.



---

Getting Started

Prerequisites

Make sure you have the following installed on your system:

Node.js (version 12 or higher)

npm (comes with Node.js)



---

Installation

1. Clone the repository:

git clone https://github.com/mavulag/blog-api.git
cd blog-api


2. Install dependencies:

npm install


3. Start the server:

npm run dev

For automatic server restarts on file changes, you can use nodemon:

npm install -g nodemon

npm run dev


4. Access the API at:

http://localhost:4000




---

Endpoints

1. GET All Posts

Retrieve all blog posts.

URL: /blog/v1.0.0/posts

Method: GET

Response:

[
  {
    "id": 1,
    "title": "The Rise of Decentralized Finance",
    "content": "Decentralized Finance (DeFi)...",
    "author": "Alex Thompson",
    "date": "2023-08-01T10:00:00Z"
  }
]



---

2. GET a Specific Post

Retrieve a single post by ID.

URL: /blog/v1.0.0/posts/:id

Method: GET

Response (if the post exists):

{
  "id": 1,
  "title": "The Rise of Decentralized Finance",
  "content": "Decentralized Finance (DeFi)...",
  "author": "Alex Thompson",
  "date": "2023-08-01T10:00:00Z"
}



---

3. POST a New Post

Create a new blog post.

URL: /blog/v1.0.0/post

Method: POST

Body:

{
  "title": "New Post Title",
  "content": "This is the content of the new post.",
  "author": "John Doe",
  "date": "2024-12-23T10:00:00Z"
}

Response:

{
  "id": 4,
  "title": "New Post Title",
  "content": "This is the content of the new post.",
  "author": "John Doe",
  "date": "2024-12-23T10:00:00Z"
}



---

4. PATCH a Post

Update specific fields of an existing post.

URL: /blog/v1.0.0/post/:id

Method: PATCH

Body (example):

{
  "title": "Updated Title"
}

Response:

{
  "id": 1,
  "title": "Updated Title",
  "content": "Decentralized Finance (DeFi)...",
  "author": "Alex Thompson",
  "date": "2023-08-01T10:00:00Z"
}



---

5. DELETE a Post

Delete a specific post by ID.

URL: /blog/v1.0.0/post/:id

Method: DELETE

Response: 204 No Content



---

Project Structure

blog-api/
├── node_modules/       # Installed dependencies
├── package.json        # Project metadata and dependencies
├── index.js            # Main application file


---

Future Enhancements

Add database support (e.g., MongoDB or PostgreSQL).

Implement user authentication and authorization.

Add pagination and filtering for posts.

Include unit and integration tests.



---

Contributing

1. Fork the repository.


2. Create a feature branch: git checkout -b feature-name.


3. Commit your changes: git commit -m "Add some feature".


4. Push to the branch: git push origin feature-name.


5. Open a pull request.




---

License

This project is licensed under the MIT License. See the LICENSE file for details.

