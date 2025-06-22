const User = require("../models/user.model");

// create a new user
const createUser = async (userData) => {
  const newUser = await User.create(userData);
  return newUser;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
};
