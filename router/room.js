const express = require("express");
const {  myRooms, participate, participateRooms, allRooms, roomIsStart, ChangeDetails ,getOneRoom} = require("../controllers/room.controllers");
const { roomVlidation, validation,} = require("../middlewares/roomVlidation");
const isAuth  = require("../middlewares/isAuth");
const router = express.Router()
const multer  = require('multer')
const path =require("path");
const Room = require("../models/Room");
const isSeller = require("../middlewares/isSeller");
const isBuyer = require("../middlewares/isBuyer");
// ********upload rooom image********//
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
   filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
})

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}
router.post('/addroom',isAuth,isSeller,upload.single('images'),roomVlidation(), validation,async(req,res)=>{
    try {
        if(req.file == undefined){
        res.status(400).send({errors:[{msg:"put a picture"}]})
      }
      else{ console.log(req.file)
        const newRomm=new Room({
          roomName:req.body.roomName,
          categorie:req.body.categorie,
          estimation:req.body.estimation,
          description:req.body.description,
          date:req.body.date,
          images:req.file.filename,
          id_seller:req.body.id_seller,
          })
        await newRomm.save()
    res.send({msg:"room is created successfully",room:newRomm})}
    } catch (error) {
           res.send({errors:[{msg:"failed upload"}]}) 
    }
    
});

router.get("/rooms",allRooms)
// get my rooms (seller)
router.get("/myrooms",isAuth,isSeller,myRooms)
// participate rooms (buyers)
router.put("/participate/:id",isAuth,isBuyer,participate)
 // get participate rooms
router.get("/myparticipaterooms",isAuth,isBuyer,participateRooms)
// room is start
router.put("/startroom/:id",isAuth,roomIsStart)
// change room additional details 
router.put("/details/:id",isAuth,ChangeDetails);
// change room additional details 
router.get("/room/:id",isAuth,getOneRoom);
module.exports = router