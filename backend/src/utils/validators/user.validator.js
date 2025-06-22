const User = require("../../models/user.model");

const { body } = require("express-validator");
const { EMAIL_REGEX, PASSWORD_REGEX } = require("../constants/regex");

const userValidationRules = [
  body("fullName")
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 2, max: 30 })
    .withMessage("Full name must be between 2 and 30 characters")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Full name must contain only letters and spaces"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error("Email already in use");
      }
    })
    .matches(EMAIL_REGEX)
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .matches(PASSWORD_REGEX)
    .withMessage(
      `Min 8 Chars: upperCase, lowerCase, number/special Char needed`
    ),
];

module.exports = userValidationRules;
