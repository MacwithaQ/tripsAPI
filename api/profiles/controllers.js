const mongoose = require("mongoose");
const Profile = require("../../models/Profile");

exports.fetchProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.find();
    return res.json(profiles);
  } catch (error) {
    next(error);
  }
};

exports.fetchSingleProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const foundProfile = await Profile.findOne({ userId }).populate("trips");
    if (foundProfile) {
      return res.json(foundProfile);
    }
  } catch (error) {
    next(error);
  }
};

exports.fetchProfileTrips = async (req, res, next) => {
  try {
  } catch (error) {}
};

exports.updateProfileImage = async (req, res, next) => {
  console.log(req.file);
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const { profileId } = req.params;
    const profile = await Profile.findByIdAndUpdate(
      { _id: profileId },
      { image: req.body.image },
      {
        new: true,
      }
    );
    res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};
