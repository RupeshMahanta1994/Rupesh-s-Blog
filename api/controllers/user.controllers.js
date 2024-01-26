import bcryptjs from "bcryptjs";
import userModel from "../models/user.model.js";
import { errorhandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return next(errorhandler(200, "User already exists"));
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

//User login
export const SigninUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || email == "" || password == "") {
      return next(errorhandler(400, "All field are required"));
    }

    //check existing user
    const validUser = await userModel.findOne({ email });
    if (!validUser) {
      return next(errorhandler(404, "User not found"));
    }
    //check password
    const checkPassword = await bcryptjs.compare(password, validUser.password);

    if (!checkPassword) {
      return next(errorhandler(500, "Bad Credential"));
    }
    //creating token
    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT,
      { expiresIn: "1d" }
    );
    const { password: pass, ...rest } = validUser._doc;
    //returning user
    return res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .send({
        success: true,
        message: "user Login successfully",
        rest,
      });
  } catch (error) {
    next(error);
  }
};
