const { validationResult } = require("express-validator");

const bcryptjs = require("bcryptjs");

const { generateToken, tokenCookieOptions } = require("../utils/auth/token");
const createError = require("../utils/error/createError");
const { createUser, getUserByEmail } = require("../services/user.service");

// register controller
const registerCtrl = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);

    const newUser = await createUser({
      ...req.body,
      password: hashedPassword,
    });

    const { _id, password, ...others } = newUser._doc;

    const token = generateToken(_id);

    res
      .status(201)
      .cookie("jwt", token, tokenCookieOptions)
      .json({ _id, ...others });
  } catch (error) {
    next(error);
  }
};

// --------- login controller ------------
const loginCtrl = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next(createError(400, "All the fields must be filled out"));
  }

  try {
    const user = await getUserByEmail(req.body.email);

    if (!user) {
      return next(createError(400, "wrong credentials"));
    }

    const isValidPswd = await bcryptjs.compare(
      req.body.password,
      user.password
    );

    if (!isValidPswd) {
      return next(createError(400, "wrong credentials"));
    }

    const { _id, password, ...others } = user._doc;

    const token = generateToken(_id);

    res
      .status(200)
      .cookie("jwt", token, tokenCookieOptions)
      .json({ _id, ...others });
  } catch (error) {
    next(error);
  }
};

// ------ logout controller ---------
const logoutCtrl = async (req, res, next) => {
  try {
    res
      .status(200)
      .clearCookie("jwt", tokenCookieOptions)
      .json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

// checking auth
const checkAuthCtrl = async (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerCtrl,
  loginCtrl,
  logoutCtrl,
  checkAuthCtrl,
};
