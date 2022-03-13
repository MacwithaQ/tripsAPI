// Importing mongoose
const mongoose = require("mongoose");

// Creates a mongoose schema to define how a certain object is to be added to the database
const ProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    image: { type: String },
    bio: { type: String },
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
