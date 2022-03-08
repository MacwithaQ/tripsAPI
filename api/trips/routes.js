const express = require("express");
const { fetchTrips } = require("./controllers");
const tripsRouter = express.Router();

tripsRouter.get("/", fetchTrips);

module.exports = tripsRouter;
