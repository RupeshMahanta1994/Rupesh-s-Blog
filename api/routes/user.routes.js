import express from "express";
import {
  CreateUserController,
  SigninUserController,
} from "../controllers/user.controllers.js";

const route = express.Router();

route.post("/createUser", CreateUserController);
route.post("/signinUser", SigninUserController);

export default route;
