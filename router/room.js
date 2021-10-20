const express = require("express");
const { addeRoom, getOneRoom, deleteRoom } = require("../controllers/room.controllers");
const { roomVlidation, validation,} = require("../middlewares/roomVlidation");

const isAuth  = require("../middlewares/isAuth");
const router = express.Router()


// post a room
router.post("/addroom",roomVlidation(), validation,addeRoom)
// get one roome
router.get("/getone/:id",getOneRoom)

 
module.exports = router