//creating an rest api
import express from "express";

const app = express();
app.use(express.json());
//rest routes

app.listen("3000", (req, res) => {
  console.log("server is running");
});
