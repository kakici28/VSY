const expressP = require("express");
const corsP = require("cors");
const axiosP = require("axios");

const appP = expressP();
appP.use(expressP.json());
appP.use(corsP());

const logevents = [];
const properties = [];

appP.post("/properties", (req, res) => {
  const { propertyId, description, price } = req.body;
  properties.push({ propertyId, description, price });
  logevents.push({ action: "property_created", propertyId });
  res.status(201).send({ propertyId, description, price });
});

appP.get("/properties", (req, res) => {
  res.send(properties);
});

appP.post("/events", (req, res) => {
  logevents.push(req.body);
  res.send({});
});

appP.get("/logevents", (req, res) => {
  res.send(logevents);
});

appP.listen(6001, () => console.log("Listening on 4001 to property-service"));