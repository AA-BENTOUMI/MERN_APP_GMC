const express = require("express");
const { getAllSellers,getAllBuyers, deleteUser } = require("../controllers/admin.controllers");


const router = express.Router()

// get all users
router.get("/allsellers",getAllSellers)
router.get("/allbuyers",getAllBuyers)
//delete user
router.delete("/allsellers/:id",deleteUser)
router.delete("/allbuyers/:id",deleteUser)

module.exports = router