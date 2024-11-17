const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    unique: true,
    type: String,
  },
  roles: {
    type: [String],
    default: ["customer"],
  },
  name: String,
  password: String,
});
// {email: "", roles: ["customer", "admin", "admin"]}

const User = mongoose.model("User", userSchema);
module.exports = User;
