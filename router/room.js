const express = require("express");
const { addeRoom, getAllRooms, editRoom, getOneRoom, deleteRoom } = require("../controllers/room.controllers");
const { roomVlidation, validation,} = require("../middlewares/roomVlidation");

const isAuth  = require("../middlewares/isAuth");
const router = express.Router()

// get all rooms
router.get("/",getAllRooms)
// post a room
router.post("/addroom",roomVlidation(), validation,addeRoom)
// get one roome
router.get("/getone/:id",getOneRoom)
// delete room
router.delete("/delete/:id",deleteRoom)
 
module.exports = router