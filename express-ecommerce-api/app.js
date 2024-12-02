const express = require("express");
const cors = require("cors");
require("express-async-errors");
const connectDb = require("./config/db");
const productRoutes = require("./route/product.route");
const authRoutes = require("./route/auth.route");
const app = express();
const port = 3000;

connectDb();
app.use(cors());
app.use(express.static("uploads"));

app.use(express.json());

app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  // save somewhere in cloud, or file (coloudwatch, sentry)
  console.log(err);

  res.status(500).json({
    message: "Something went wrong.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//tomorrow: sort by price, authentication, autorization
