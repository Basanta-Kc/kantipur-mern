const Task = require("../models/Task");

const getTasks = async (req, res) => {
  if (!req.session.user) return res.redirect("/auth/sign-in");
  const tasks = await Task.find({ user: req.session.user._id });
  res.render("index", { tasks });
};

const createTask = async (req, res) => {
  if (!req.session.user) return res.redirect("/auth/sign-in");

  await Task.create({ title: req.body.title, user: req.session.user._id });
  res.redirect("/");
};

const deleteTask = async (req, res) => {
  if (!req.session.user) return res.redirect("/auth/sign-in");

  const taskId = req.params.id;
  await Task.deleteOne({ _id: taskId, user: req.session.user._id });
  res.redirect("/");
};

const editTask = async (req, res) => {
  if (!req.session.user) return res.redirect("/auth/sign-in");

  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId, user:req.session.user._id });

  // Todo:
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
