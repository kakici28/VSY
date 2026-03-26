const expressE = require("express");
const corsE = require("cors");
const axiosE = require("axios");

const appE = expressE();
appE.use(expressE.json());
appE.use(corsE());

appE.post("/events", async (req, res) => {
  const event = req.body;

  await axiosE.post("http://localhost:4005/events", event);

  res.send({ status: "OK" });
});

appE.listen(6006, () => console.log("Listening on 4006 to event-bus"));