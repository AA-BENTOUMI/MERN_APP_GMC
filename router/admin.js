const express = require("express");
const { getAllSellers,getAllBuyers, deleteUser, ChangeStatus, getAllRooms, deleteRoom } = require("../controllers/admin.controllers");


const router = express.Router()

// get all users
router.get("/allsellers",getAllSellers)
router.get("/allbuyers",getAllBuyers)
//delete user
router.delete("/allsellers/:id",deleteUser)
router.delete("/allbuyers/:id",deleteUser)
// get all rooms
router.get("/allRooms",getAllRooms)
// delete room
router.delete("/deleteRoom/:id",deleteRoom)
// change room status
router.put("/changestatus/:id", ChangeStatus);
module.exports = router