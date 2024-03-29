import express from "express";
import {
  CreateUserController,
  SigninUserController,
  googleAuthController,
} from "../controllers/user.controllers.js";

const route = express.Router();

route.post("/createUser", CreateUserController);
route.post("/signinUser", SigninUserController);
route.post("/google", googleAuthController);

export default route;
