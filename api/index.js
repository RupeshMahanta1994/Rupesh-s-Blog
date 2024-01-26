//creating an rest api
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import userRoutes from "./routes/user.routes.js";

//configuring environmental variables
dotenv.config();

//connection to database
connectDB();
const app = express();
app.use(express.json());
//rest routes
app.use("/api/user", userRoutes);

//middle ware for error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).send({
    success: false,
    statusCode,
    message,
  });
});
const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log("server is running");
});
