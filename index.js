const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const logevents = [];
const users = [];

app.post("/register", (req, res) => {
  const { username } = req.body;
  const token = randomBytes(4).toString("hex");
  users.push({ username, token });
  logevents.push({ action: "register", username });
  res.status(201).send({ username, token });
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  const user = users.find(u => u.username === username);
  logevents.push({ action: "login", username });
  if (user) res.send(user);
  else res.status(404).send("User not found");
});

app.post("/events", (req, res) => {
    logs.push(req.body);
  res.send({});
});

app.get("/logevents", (req, res) => {
  res.send(logevents);
});

app.listen(6000, () => console.log("Listening on 6000 to auth-service"));