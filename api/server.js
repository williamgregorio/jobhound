const express = require("express");
const server = express();
const path = require("path");
const fs = require("fs");
server.use(express.json());

server.use(express.static(path.join(__dirname, "..", "public")));
const resumesDbPath = path.join(__dirname, "..", "data", "resumes.json");

function initializeResumesDb() {
  try {
    if (!fs.existsSync(resumesDbPath)) {
      fs.writeFileSync(resumesDbPath, JSON.stringify([], null, 2), "utf8");
      console.log("resumes.json created");
    }
  } catch (error) {
    console.error("Network error: ", error);
  }
}
initializeResumesDb();
server.get("/resumes", (req, res) => {
  try {
    const resumes = JSON.parse(fs.readFileSync(resumesDbPath, "utf8"));
    console.log(res.json(resumes));
    res.json(resumes);
  } catch (error) {
    res.status(500).send("Internal server error", error);
  }
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

function generateUniqueId() {
  return `${Date.now()}-${Math.random().toString(36)}`;
}

server.post("/create-resume", (req, res) => {
  const resumesData = JSON.parse(fs.readFileSync(resumesDbPath, null, 2));
  const newResume = {
    id: generateUniqueId(),
    data: {},
  };
  resumesData.push(newResume);
  fs.writeFileSync(resumesDbPath, JSON.stringify(resumesData, null, 2));
  res.status(201).send({ resumeKey: newResume.id });
});

server.put("/resumes/:resumeId", (req, res) => {
  const { resumeId } = req.params;
  const updatedData = req.body;
  try {
    const resumeData = JSON.parse(fs.readFileSync(resumesDbPath, "utf8"));
    const resumeIndex = resumeData.findIndex(
      (resume) => resume.id === resumeId,
    );
    if (resumeIndex === -1) {
      return res.status(404).send("Resume not found");
    }
    resumeData[resumeIndex].data = updatedData;
    fs.writeFileSync(
      resumesDbPath,
      JSON.stringify(resumeData, null, 2),
      "utf8",
    );
    res.send({ message: "Resume updated successfully" });
  } catch (error) {
    console.error("Failed to update: ", error);
    res.status(500).send("Internal server error");
  }
});

server.get("/resumes/:resumeId", (req, res) => {
  const { resumeId } = req.params;
  try {
    const resumesData = JSON.parse(fs.readFileSync(resumesDbPath, "utf8"));
    const resume = resumesData.find((r) => r.id === resumeId);
    if (resume) {
      res.json(resume);
    } else {
      res.status(404).send("Resume not found");
    }
  } catch (error) {
    console.error("Failed to get resume: ", error);
    res.status(500).send("Internal server error");
  }
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = server;
