// Importing mongoose
const mongoose = require("mongoose");

// Creates a mongoose schema to define how a certain object is to be added to the database
const TripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Trip", TripSchema);
