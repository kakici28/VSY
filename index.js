const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const logevents = [];

app.get("/_endpoint_", (req, res) => {
  
});

app.post("/_endpoint_",  (req, res) => {

  res.status(201);
});


app.post("/events", async (req, res) => {
  
  res.send({});
});
app.get("/logevents", (req, res) => {
  res.send(logevents);
});

app.listen(4000, () => {
  console.log("Listening on 4000 to _serviceName_");
});
