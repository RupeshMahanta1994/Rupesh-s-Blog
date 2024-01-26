import bcryptjs from "bcryptjs";
import userModel from "../models/user.model.js";
import { errorhandler } from "../utils/error.js";

export const CreateUserController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (
      !username ||
      !email ||
      !password ||
      username == "" ||
      email == "" ||
      password == ""
    ) {
      next(errorhandler(400, "All field are required"));
    }

    //check existing user
    const existingUser = await userModel.find({ email });
    if (existingUser) {
      next(errorhandler(200, "User already exists"));
    }
    //hashpassword
    const hashedPassword = bcryptjs.hashSync(password, 10);

    //create new user
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    //Save User
    await user.save();
    return res.status(200).send({
      success: true,
      message: "user created successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
