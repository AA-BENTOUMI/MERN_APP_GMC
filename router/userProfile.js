const express = require("express");
const { getProfile, editProfile, deleteProfile } = require("../controllers/userProfile.controllers");
const { registerVlidation, validation } = require("../middlewares/userVlidation");
const isAuth  = require("../middlewares/isAuth");
const router = express.Router()

// get user profile
router.get("/profile/:id",getProfile)
// edit profile
router.put("/profile/:id",registerVlidation(), validation,editProfile)
// delete Profile
router.delete("/profile/:id",deleteProfile)

module.exports = router
