# 📝 Full Stack To-Do App (Beginner-Friendly)

A simple full stack To-Do List app built from scratch using:

- 🔹 Frontend: HTML + JavaScript
- 🔸 Backend: Node.js + Express
- 🗄️ Database: MongoDB Atlas (Cloud)
- 🧪 API Testing: Postman

Perfect for beginners exploring how frontend, backend, and databases work together!

---

## 📸 Demo

Create and view your to-do tasks — and watch them persist across page refreshes thanks to your connected cloud database.

<img src="https://user-images.githubusercontent.com/your-screenshot" alt="Demo screenshot" />

---

## 🌐 Project Structure

```
todo-app/
├── backend/
│   ├── index.js          // Express server + API routes
│   ├── models/
│   │   └── Task.js       // Mongoose schema
│   └── package.json
└── frontend/
    └── index.html        // Simple HTML + JS interface
```

---

## 🚀 Features

- Add a new task
- View all tasks
- Persist data in a cloud database (MongoDB Atlas)
- Full-stack architecture: Frontend ↔ Backend ↔ Database

---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. Setup the backend:

```bash
cd backend
npm install
```

3. Create a .env file or directly update your MongoDB URI in index.js:

```js
mongoose.connect("YOUR_MONGO_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

4. Start the backend server:

```bash
node index.js
```

Make sure you see: Server running on http://localhost:3000

5. Open the frontend:

Just open frontend/index.html in your browser!

---

## 🧪 Testing APIs with Postman

- GET all tasks:  
  Method: GET  
  URL: http://localhost:3000/tasks

- POST a new task:  
  Method: POST  
  URL: http://localhost:3000/tasks  
  Body → raw → JSON

```json
{
  "text": "Buy groceries"
}
```

---

## 🛠️ Tech Stack

- Frontend: Vanilla JavaScript, HTML
- Backend: Node.js, Express.js
- Database: MongoDB Atlas + Mongoose
- Testing: Postman
- Hosting: Localhost

---

## 📘 What I Learned

- How frontend talks to backend via API (fetch)
- Building a REST API with Express
- Connecting Node.js to MongoDB Atlas
- Storing and retrieving data from the cloud

---

## 🙌 Credits

Inspired by personal curiosity and countless questions like:
> “Where does the data go when I click submit?”

---

## 📄 License

MIT License. Feel free to fork, learn, and improve!
