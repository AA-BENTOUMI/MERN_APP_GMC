const express = require("express");
const { addeRoom, myRooms, participate, participateRooms } = require("../controllers/room.controllers");
const { roomVlidation, validation,} = require("../middlewares/roomVlidation");

const isAuth  = require("../middlewares/isAuth");
const router = express.Router()

// post a room
router.post("/addroom",isAuth,roomVlidation(), validation,addeRoom)
// get my rooms (seller)
router.get("/myrooms",isAuth,myRooms)
// participate rooms (buyers)
router.put("/participate/:id",isAuth,participate)
 // get participate rooms
router.get("/myparticipaterooms",isAuth,participateRooms)

module.exports = router