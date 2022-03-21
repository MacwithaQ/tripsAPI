const express = require("express");
const {
  fetchProfiles,
  updateProfileImage,
  fetchSingleProfile,
} = require("./controllers");
const passport = require("passport");
const upload = require("../../middleware/multer");

const profilesRouter = express.Router();

profilesRouter.get("/", fetchProfiles);
profilesRouter.get("/:userId", fetchSingleProfile);
profilesRouter.put("/:profileId", upload.single("image"), updateProfileImage);

module.exports = profilesRouter;
