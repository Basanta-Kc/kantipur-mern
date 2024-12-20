import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/kantipur-blog");
};

export default connectDb;
