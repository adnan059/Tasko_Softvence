const mongoose = require("mongoose");
const { EMAIL_REGEX, PASSWORD_REGEX } = require("../utils/constants/regex");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Full name is Required"],
      minlength: [2, "Not less than 2 chars is allowed "],
      maxlength: [30, "Not more than 30 chars is allowed"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [EMAIL_REGEX, "Invalid email format"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [
        PASSWORD_REGEX,
        `Min 8 Chars: upperCase, lowerCase, number/special Char needed`,
      ],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
