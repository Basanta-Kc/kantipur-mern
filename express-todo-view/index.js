const express = require("express");
const bcrypt = require("bcryptjs");
const connectDb = require("./config/db");
const authRoutes = require("./routes/auth.routes")
const taskController = require("./controllers/task.controller"); // { read, delete ,edit}
const authController = require("./controllers/auth.controller");
const User = require("./models/User");
const app = express();
const port = 3000;

connectDb();

app.set("view engine", "ejs");
app.use(express.urlencoded());

// Task Routes
app.get("/", taskController.getTasks);
app.post("/add", taskController.createTask);
app.post("/delete/:id", taskController.deleteTask);
app.get("/edit/:id", taskController.editTask);
app.post("/edit/:id", taskController.updateTask);

// app.use("/", taskRoutes)

// Authentication Routes

app.use("/auth", authRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
