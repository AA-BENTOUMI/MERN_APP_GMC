const Room=require("../models/Room")
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: "1300047",
  key: "dad7bd945923df62c464",
  secret: "f58bb8ed7766c838c604",
  cluster: "eu",
  useTLS: true,
});

// get all Rooms
exports.allRooms=async(req,res)=>{
    try {
    const allRooms=await Room.find()
    res.status(200).send(allRooms)
} catch (error) {
    res.send({errors:[{msg:"error fetch rooms"}]})
}
}
// get my Rooms
exports.myRooms = async (req, res) => {
  try {
    // find rooms with user id 
    const findRooms = await Room.find({ id_seller: req.user.id }).populate("id_seller");
    res.send( findRooms );
  } catch (error) {
    res.status(400).send({ msg: "room not found", error });
  }
};
// participate rooms (buyers)
exports.participate = async (req, res) => {
  try { 
    // find rooms with user id and push buyer id
    let result=await Room.findByIdAndUpdate(req.params.id,{$push:{id_buyer:req.user.id}})
    res.send( {msg:"participat with succ",result} );
  } catch (error) {
    res.status(400).send({ msg: "participation is failed", error });
  }
};
// get my participate rooms
exports.participateRooms = async (req, res) => {
  try {
    // find rooms with user id 
    const findRooms = await Room.find({ id_buyer: req.user.id })
    res.send( findRooms);
  } catch (error) {
    res.status(400).send({ msg: "room not found", error });
  }
};
// room start or with time
exports.roomIsStart=async(req,res)=>{
    try {
  
    let result=await Room.findByIdAndUpdate(req.params.id,{activated: req.body.activated}); 
    res.status(200).send({ msg: "Room is ativated", result }); 
    } catch (error) {
    res.status(400).send({errors:[{msg:"failed room"}]})
    }
}
// change room status
exports.ChangeDetails=async(req,res)=>{
try {
  let result=await Room.findByIdAndUpdate( req.params.id , {starting:req.body.starting,last:req.body.last } );
 pusher.trigger("my-click", "my-update", {
  result:result
});
  res.status(200).send({ msg: "Details updated successfully" ,result});
} catch (error) {
  res.status(400).send({ errors: [{ msg: "can not update this Details", error }] });
}
}
//get one room
exports.getOneRoom=async(req,res)=>{
try {
  let result=await Room.findById( { _id: req.params.id },);
   res.status(200).send({ msg: "successfully" ,result});
} catch (error) {
  res.status(400).send({ errors: [{ msg: "room not found", error }] });
}
}