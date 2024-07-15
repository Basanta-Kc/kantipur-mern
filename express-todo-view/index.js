const express = require("express");
const connectDb = require("./config/db");
const taskController = require("./controllers/task.controller"); // { read, delete ,edit}
const User = require("./models/User");
const app = express();
const port = 3000;

connectDb();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", taskController.getTasks);
app.post("/add", taskController.createTask);
app.post("/delete/:id", taskController.deleteTask);
app.get("/edit/:id", taskController.editTask);
app.post("/edit/:id", taskController.updateTask);

app.get("/auth/sign-up", (req, res) => {
  res.render("sign-up");
});

app.get("/auth/sign-in", (req, res) => {
  res.render("sign-in");
});

app.post("/auth/sign-up", async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
});

app.post("/auth/sign-in", async (req, res) => {
  const user = await User.findOne(req.body); // { username, password}
  if (user) res.redirect("/");
  else res.render("sign-in", { message: "Invalid Credentials" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
