const express = require("express");
const { getProfile, editProfile, deleteProfile } = require("../controllers/userProfile.controllers");
const { registerVlidation, validation } = require("../middlewares/userVlidation");
const isAuth  = require("../middlewares/isAuth");
const router = express.Router()

// get user profile
// router.get("/profile/:id",getProfile)
// edit profile
router.put("/profile/:id",isAuth,editProfile)
// delete Profile
router.delete("/profile/:id",isAuth,deleteProfile)

module.exports = router
