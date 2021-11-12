const express = require("express");
const {  myRooms, participate, participateRooms, allRooms, roomIsStart } = require("../controllers/room.controllers");
const { roomVlidation, validation,} = require("../middlewares/roomVlidation");
const isAuth  = require("../middlewares/isAuth");
const router = express.Router()
const multer  = require('multer')
const path =require("path");
const Room = require("../models/Room");
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
router.post('/addroom',isAuth,upload.single('images'),roomVlidation(), validation,async(req,res)=>{
    try {
        if(req.file == undefined){
           res.send({msg:"choisie une image"})
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
    res.send({msg:"salle créé avec succ",room:newRomm})}
    } catch (error) {
           res.send({errors:[{msg:"failed upload"}]}) 
    }
    
});

router.get("/rooms",allRooms)
// get my rooms (seller)
router.get("/myrooms",isAuth,myRooms)
// participate rooms (buyers)
router.put("/participate/:id",isAuth,participate)
 // get participate rooms
router.get("/myparticipaterooms",isAuth,participateRooms)
// room is start
router.put("/startroom/:id",isAuth,roomIsStart)
module.exports = router