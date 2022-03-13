const mongoose = require("mongoose");
const Trip = require("../../models/Trip");

exports.fetchTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find().populate("profile");
    return res.json(trips);
  } catch (error) {
    next(error);
  }
};

exports.tripCreate = async (req, res, next) => {
  try {
    req.body.organizer = req.user._id;
    req.body.profile = req.user.profile_id;
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const newTrip = await Trip.create(req.body);
    return res.status(201).json(newTrip);
  } catch (error) {
    next(error);
  }
};

exports.deleteTrip = async (req, res, next) => {
  try {
    const { tripId } = req.params;
    const deletedTrip = await Trip.findByIdAndRemove(tripId);
    if (deletedTrip) {
      res.status(204).json({ msg: "Trip deleted successfully", deletedTrip });
    } else {
      res.status(404).json({ msg: "Trip not found" });
    }
  } catch (error) {
    next(error);
  }
};
