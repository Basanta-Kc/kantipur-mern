const Task = require("../models/Task");

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.render("index", { tasks });
};

const createTask = async (req, res) => {
  await Task.create({ title: req.body.title });
  res.redirect("/");
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  await Task.deleteOne({ _id: taskId });
  res.redirect("/");
};

const editTask = async (req, res) => {
  const taskId = req.params.id;
  await Task.findOne({ _id: taskId });
  res.send(`
      <form method="post" action="/edit/${taskId}">
      <input type="text" name="title" id="title" value="${task.title}" />
      <input type="submit" value="Update" id="submit" />
    </form>
    `);
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  await Task.updateOne({ _id: taskId }, { title: req.body.title });
  res.redirect("/");
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  editTask,
  updateTask,
};
