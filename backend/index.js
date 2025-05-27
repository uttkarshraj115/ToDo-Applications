const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGO_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const Task = require("./models/Task");

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const { text } = req.body;
  const newTask = new Task({ text });
  await newTask.save();
  res.json(newTask);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
