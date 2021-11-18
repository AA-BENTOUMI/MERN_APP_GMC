const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const { registerValidation, validation, loginValiation } = require("../middlewares/userVlidation");
const isAuth  = require("../middlewares/isAuth");
const router = express.Router()

// register
router.post("/register" ,registerValidation(), validation,Register)
// login
router.post("/login",loginValiation(), validation,Login)
// get
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});


module.exports = router

