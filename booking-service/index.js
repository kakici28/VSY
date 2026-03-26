const expressB = require("express");
const corsB = require("cors");
const axiosB = require("axios");

const appB = expressB();
appB.use(expressB.json());
appB.use(corsB());

const logevents = [];
const bookings = [];

appB.post("/book", async (req, res) => {
  const { propertyId, userId } = req.body;
  bookings.push({ propertyId, userId });
  logevents.push({ action: "booking_created", propertyId, userId });

  await axiosB.post("http://localhost:4005/events", {
    EventType: "Checkout",
    Data: { propertyId, userId }
  });
  res.status(201).send({ propertyId, userId });
});

appB.post("/events", (req, res) => {
  logevents.push(req.body);
  res.send({});
});

appB.get("/logevents", (req, res) => {
  res.send(logevents);
});

appB.listen(6004, () => console.log("Listening on 4004 to booking-service"));