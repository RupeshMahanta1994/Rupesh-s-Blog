import mongoose from "mongoose";

export default function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to data base");
  } catch (error) {
    console.log("Error in connecting to database", error);
  }
}
