const express = require('express');
const { createUser, findByCredentials } = require('../Services/User');

const router = express.Router();

// Register a new user with a username and password
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await createUser(username, password);
    const token = user.generateAuthToken();
    res.status(201).send({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Attempt to login a user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findByCredentials(username, password);
    const token = user.generateAuthToken();
    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
