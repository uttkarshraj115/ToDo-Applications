const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: String
});

module.exports = mongoose.model("Task", TaskSchema);
