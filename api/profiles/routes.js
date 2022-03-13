const express = require("express");
const {
  fetchProfiles,
  updateProfile,
  fetchSingleProfile,
} = require("./controllers");
const passport = require("passport");

const profilesRouter = express.Router();

profilesRouter.get("/", fetchProfiles);
profilesRouter.get("/:userId", fetchSingleProfile);
profilesRouter.put("/", updateProfile);

module.exports = profilesRouter;
