const mongoose = require("mongoose");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../../config/keys");
const Profile = require("../../models/Profile");

exports.fetchUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("profile_id");
    return res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.signUp = async (req, res, next) => {
  try {
    const newProfile = await Profile.create({
      user: req.body._id,
      image: "media/profile-pic.png",
      bio: "Enter your bio here",
      trips: [],
    });
    const { password } = req.body;
    const saltRounds = 10;
    req.body.password = await bcrypt.hash(password, saltRounds);
    req.body.profile_id = newProfile._id;
    const newUser = await User.create(req.body);
    console.log(newProfile);
    const payload = {
      _id: newUser._id,
      user: newUser.user,
      exp: Date.now() + JWT_EXPIRATION_MS,
    };
    const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.signIn = (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    const payload = {
      _id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      exp: Date.now() + JWT_EXPIRATION_MS,
    };
    const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
    console.log(token);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
