import express from "express";
import { CreateUserController } from "../controllers/user.controllers.js";

const route = express.Router();

route.post("/createUser", CreateUserController);

export default route;
