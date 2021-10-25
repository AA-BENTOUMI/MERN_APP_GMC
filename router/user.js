const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const { registerVlidation, validation, loginValiation } = require("../middlewares/userVlidation");
const isAuth  = require("../middlewares/isAuth");
const isSeller =require("../middlewares/isSeller")
const router = express.Router()

// register
router.post("/register",Register)
// login
router.post("/login",Login)
// get
router.get("/current", isAuth, (req, res) => {
  res.send({user:req.user});
});

module.exports = router

