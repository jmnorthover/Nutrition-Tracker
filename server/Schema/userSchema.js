/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtKey } = require('../Config/keys');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
  },
  days: [
    {
      dayId: { type: Schema.Types.ObjectId, ref: 'Day', required: true },
      date: { type: Date, required: true },
    },
  ],
});

// Hash the user's password before saving it
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isNew || user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Generate an auth token for the user
userSchema.methods.generateAuthToken = function() {
  const user = this;
  const token = jwt.sign({ _id: user._id }, jwtKey);
  return token;
};

module.exports = mongoose.model('User', userSchema);
