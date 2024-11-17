const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/kantipur-ecommerce");
    console.log("DB Connected.");
  } catch (error) {
    console.log("DB Connection Error", error);
  }
};

module.exports = connectDb;
