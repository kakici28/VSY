const expressS = require("express");
const corsS = require("cors");
const axiosS = require("axios");

const appS = expressS();
appS.use(expressS.json());
appS.use(corsS());

const logevents = [];

appS.get("/search", async (req, res) => {
  const response = await axiosS.get("http://localhost:4001/properties");
  logevents.push({ action: "search_triggered" });
  res.send(response.data);
});

appS.post("/events", (req, res) => {
  logevents.push(req.body);
  res.send({});
});

appS.get("/logevents", (req, res) => {
  res.send(logevents);
});

appS.listen(6002, () => console.log("Listening on 4002 to search-service"));