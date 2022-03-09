const mongoose = require("mongoose");
const Trip = require("../../models/Trip");

exports.fetchTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find();
    return res.json(trips);
  } catch (error) {
    next(error);
  }
};

exports.tripCreate = async (req, res) => {
  try {
    req.body.organizer = req.user._id;
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
