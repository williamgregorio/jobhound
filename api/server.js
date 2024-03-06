const express = require("express");
const server = express();
const path = require("path");
const fs = require("fs");
server.use(express.json());

server.use(express.static(path.join(__dirname, "..", "public")));
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

server.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) {
    return res.status(400).send("Username and Password required");
  }
  const usersDbPath = path.join(__dirname, "..", "data", "users.json");
  const users = JSON.parse(fs.readFileSync(usersDbPath, "utf8"));

  if (users.some((user) => user.username === username)) {
    return res.status(409).send("Username already exists");
  }

  const newUser = { id: generateUniqueId(), username, password };
  users.push(newUser);
  fs.writeFileSync(usersDbPath, JSON.stringify(users, null, 2));
  res.status(201).send("User registered");
});

function generateUniqueId() {
  return `${Date.now()}-${Math.random().toString(36)}`;
}

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const userDbPath = path.join(__dirname, "..", "data", "users.json");
  const users = JSON.parse(fs.readFileSync(userDbPath));
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (user) {
    res.send({ message: "Login succesful", authenticated: true });
  } else {
    res.status(401).send({ message: "Invalid username or password" });
  }
});
module.exports = server;
