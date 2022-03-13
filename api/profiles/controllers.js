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

exports.updateProfile = async (req, res, next) => {
  try {
    // const { password } = req.body;
    // const saltRounds = 10;
    // req.body.password = await bcrypt.hash(password, saltRounds);
    // const newUser = await User.create(req.body);
    // const newProfile = await Profile.create({
    //   user: newUser._id,
    //   image: "media/profile-pic.png",
    //   bio: "Enter your bio here",
    //   trips: [],
    // });
    // console.log(newProfile);
    // const payload = {
    //   _id: newUser._id,
    //   user: newUser.user,
    //   exp: Date.now() + JWT_EXPIRATION_MS,
    // };
    // const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
    // res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
