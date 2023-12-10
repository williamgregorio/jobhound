const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env

const router = express.Router();

// Import your user model or functions for querying the user database.
const { findByUsername, /* other user-related functions */ } = require('../users/users-model');

// Define a secret key for signing tokens. Keep this secret.
const secretKey = process.env.SECRET_KEY; // Load the secret key from environment variables

// Authentication Endpoint: Handle user login.
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username exists in your user database.
    const user = await findByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password stored in your database.
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If the credentials are valid, generate an authentication token (e.g., JWT).
    const tokenPayload = {
      user_id: user.user_id,
      username: user.username,
    };

    const token = jwt.sign(tokenPayload, secretKey, {
      expiresIn: '1h', // Set the token expiration time (e.g., 1 hour).
    });

    // Return the generated token as a response to the client.
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
