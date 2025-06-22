const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");
const createError = require("../error/createError");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SK, { expiresIn: "7d" });
};

const tokenCookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  secure: process.env.NODE_ENV === "production",
  path: "/",
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return next(createError(401, "not authenticated"));
    }

    const decoded = jwt.verify(token, process.env.SK);

    if (!decoded) {
      return next(createError(401, "invalid token"));
    }

    const user = await User.findOne({ _id: decoded.id }).select("-password");

    if (!user) {
      return next(createError(404, "user not found"));
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyToken,
};

module.exports = {
  generateToken,
  tokenCookieOptions,
  verifyToken,
};
