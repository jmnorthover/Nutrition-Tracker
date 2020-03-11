const bcrypt = require('bcrypt');
const User = require('../../Schema/userSchema');

// Adds a new user to the users collection
const createUser = async (username, password) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('Username already in use');
  }
  const newUser = new User({ username, password });
  await newUser.save();
  return newUser;
};

// Finds a user by their username and verifies their password
const findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error('Incorrect password');
  }
  return user;
};

module.exports = { createUser, findByCredentials };
