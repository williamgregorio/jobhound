const express = require('express');
const server = express();
const cors = require("cors"); // Import the cors middleware

server.use(express.json());
server.use(cors());


const usersRouter = require('./users/users-router');
server.use('/api/v1/users', usersRouter);

const authRouter = require('./auth/auth-router');
server.use('/api/v1/auth', authRouter);


server.get('/', (req,res) => {
    res.send('<h1>Welcome to resume api</h1>')
})

module.exports = server;