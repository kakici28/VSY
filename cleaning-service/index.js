const expressC = require("express");
const corsC = require("cors");

const appC = expressC();
appC.use(expressC.json());
appC.use(corsC());

const logevents = [];
const cleaningTasks = [];

appC.post("/events", (req, res) => {
  const { EventType, Data } = req.body;
  if (EventType === "Checkout") {
    cleaningTasks.push({ task: `Clean property ${Data.propertyId}` });
  }
  logevents.push(req.body);
  res.send({});
});

appC.get("/tasks", (req, res) => {
  res.send(cleaningTasks);
});

appC.get("/logevents", (req, res) => {
  res.send(logevents);
});

appC.listen(6005, () => console.log("Listening on 4005 to cleaning-service"));