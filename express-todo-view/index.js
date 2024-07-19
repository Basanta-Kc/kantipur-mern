const express = require("express");
const session = require("express-session");
const protect = require("./middleware/protect.middleware");
const connectDb = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const taskController = require("./controllers/task.controller"); // { read, delete ,edit}
const MongoStore = require("connect-mongo");
const app = express();
const port = 3000;

connectDb();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(
  session({
    secret: "123456",
    resave: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/task-management",
    }),
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, sameSite: true },
  })
);

// Task Routes
app.get("/", protect, taskController.getTasks);
app.post("/add", protect, taskController.createTask);
app.post("/delete/:id", protect, taskController.deleteTask);
app.get("/edit/:id", protect, taskController.editTask);
app.post("/edit/:id", protect, taskController.updateTask);

// app.use("/", taskRoutes)

// Authentication Routes

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
