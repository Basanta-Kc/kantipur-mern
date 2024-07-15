const express = require("express");
const connectDb = require("./config/db");
const taskController = require("./controllers/task.controller") // { read, delete ,edit}
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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
