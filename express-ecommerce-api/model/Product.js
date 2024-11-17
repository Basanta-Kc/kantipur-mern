const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    price: Number,
    // user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
