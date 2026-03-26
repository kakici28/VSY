const expressR = require("express");
const corsR = require("cors");

const appR = expressR();
appR.use(expressR.json());
appR.use(corsR());

const logevents = [];

appR.get("/recommend", (req, res) => {
  logevents.push({ action: "recommendation_generated" });
  res.send({ recommendation: "Try our top-rated apartments!" });
});

appR.post("/events", (req, res) => {
  logevents.push(req.body);
  res.send({});
});

appR.get("/logevents", (req, res) => {
  res.send(logevents);
});

appR.listen(6003, () => console.log("Listening on 4003 to recommendation-service"));