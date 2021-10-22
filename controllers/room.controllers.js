const Room=require("../models/Room")

// create Room
// exports.addeRoom =async(req,res)=>{
//     try {
//         const newRomm=new Room({...req.body,id_seller:req.user._id})
//         await newRomm.save()
//     res.send({msg:"salle créé avec succ",room:newRomm})
//     } catch (error) {
//     res.send({errors:[{msg:"échéc création du salle"}]})       
//     }
// }
// get my Rooms
exports.myRooms = async (req, res) => {
  try {
    // find rooms with user id 
    const findRooms = await Room.find({ id_seller: req.user.id }).populate("id_seller");
    res.send( {msg:"liste des salles",findRooms} );
  } catch (error) {
    res.status(400).send({ msg: "salle non trouvé", error });
  }
};
// participate rooms (buyers)
exports.participate = async (req, res) => {
  try { 
    // find rooms with user id and push buyer id
    let result=await Room.findByIdAndUpdate(req.params.id,{id_buyer:req.user.id}).populate("id_seller id_buyer");
    res.send( {msg:"participer avec succ",result} );
  } catch (error) {
    res.status(400).send({ msg: "échec participation", error });
  }
};
// get my participate rooms
exports.participateRooms = async (req, res) => {
  try {
    // find rooms with user id 
    const findRooms = await Room.find({ id_buyer: req.user.id }).populate("id_buyer");
    res.send( {msg:"liste des salles",findRooms} );
  } catch (error) {
    res.status(400).send({ msg: "salle non trouvé", error });
  }
};