import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      default:
        "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
