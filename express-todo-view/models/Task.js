const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
