#  AI Notes Backend API

# Overview

This project is a backend REST API for an AI-powered Notes application. It is built using Node.js, Express, and MongoDB, allowing users to create, read, update, and delete notes efficiently.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* dotenv
* CORS

---


```
server/
│── models/        # Database schemas
│── routes/        # API routes
│── middleware/    # Custom middleware (auth, etc.)
│── server.js      # Main server file
│── .env           # Environment variables
```

---

## ⚙️ Setup Instructions


```
git clone https://github.com/YOUR_USERNAME/ai-notes-backend.git
cd ai-notes-backend/server
```

---



```
npm install
```

---



```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---


```
node server.js
```

---




#### ➤ Get all notes

```
GET /api/notes
```

#### ➤ Create a note

```
POST /api/notes
```

Body:

```
{
  "title": "Sample Note",
  "content": "This is a test note"
}
```

#### ➤ Update a note

```
PUT /api/notes/:id
```

#### ➤ Delete a note

```
DELETE /api/notes/:id
```

---


You can test API endpoints using:

* Postman
* Thunder Client (VS Code)

---

* RESTful API architecture
* CRUD operations for notes
* MongoDB integration with Mongoose
* Clean project structure

---

* User authentication (JWT)
* AI-powered note summarization
* Frontend integration (React)
* Deployment (Render / Railway)

---


Nischay Shukla
