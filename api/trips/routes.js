const express = require("express");
const passport = require("passport");
const upload = require("../../middleware/multer");
const { fetchTrips, tripCreate, deleteTrip } = require("./controllers");
const tripsRouter = express.Router();

tripsRouter.get("/", fetchTrips);
tripsRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  tripCreate
);
tripsRouter.delete("/:tripId", deleteTrip);

module.exports = tripsRouter;
