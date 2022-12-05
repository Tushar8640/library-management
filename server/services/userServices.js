const User = require("../models/User");

// create user / signUp user
exports.addUser = async (userInfo) => {
  const user = await User.create(userInfo);
  await user.save({validateBeforeSave: true});
  return user;
};

// delete user by email
exports.deleteUser = async (email) => {
  const user = await User.deleteOne({email});
  return user;
};

// find user by email
exports.findUserByEmail = async (email) => {
  return await User.findOne({email});
};

// get all users
exports.getAllUser = async () => {
  return await User.find({});
};

// update user
exports.updateUser = async (email, updatedInfo) => {
  return await User.updateOne({email}, updatedInfo, {runValidators: true});
};
