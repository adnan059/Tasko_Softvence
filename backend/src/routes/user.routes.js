const express = require("express");

const userValidationRules = require("../utils/validators/user.validator");
const {
  registerCtrl,
  loginCtrl,
  logoutCtrl,
  checkAuthCtrl,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/auth/token");

const router = express.Router();

// register
router.post("/register", userValidationRules, registerCtrl);

// login
router.post("/login", loginCtrl);

// logout
router.post("/logout", logoutCtrl);

// check auth
router.get("/check-auth", verifyToken, checkAuthCtrl);

module.exports = router;
