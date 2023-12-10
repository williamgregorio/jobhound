require('dotenv').config(); // Load environment variables from a .env file

module.exports = {
  secretKey: process.env.SECRET_KEY,
};