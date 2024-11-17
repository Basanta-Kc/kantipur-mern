const express = require("express");
require("express-async-errors");
const connectDb = require("./config/db");
const productRoutes = require("./route/product.route");
const app = express();
const port = 3000;

connectDb();

app.use(express.json());

app.use("/api/product", productRoutes);

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
