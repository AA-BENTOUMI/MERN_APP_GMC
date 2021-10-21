const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const { registerVlidation, validation, loginValiation } = require("../middlewares/userVlidation");
const isAuth  = require("../middlewares/isAuth");
const isSeller =require("../middlewares/isSeller")
const router = express.Router()

// register
router.post("/register",registerVlidation(), validation,Register)
// login
router.post("/login",loginValiation(), validation,Login)
// get
// router.get("/",isAuth,isSeller,(req,res)=>{
//     res.send({user:req.user})
// })

module.exports = router

