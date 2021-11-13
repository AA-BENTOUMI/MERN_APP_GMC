const Room = require("../models/Room");
const User = require("../models/User");
// ***********users management************//
// get sellers list
exports.getAllSellers = async (req, res) => {
  try {
    const sellersList = await User.find({ role: "seller" });
    res.send({ msg: "list acheteurs", sellers: sellersList });
  } catch (error) {
    res.status(400).send({errors:[{msg:"éhec list acheteures"}]})
  }
}
// get buyers list
exports.getAllBuyers = async (req, res) => {
  try {
    const buyersList = await User.find({ role: "buyer" });
    res.send({ msg: "list vendeurs", buyers: buyersList });
  } catch (error) {
    res.status(400).send({errors:[{msg:"éhec list vendeurs"}]})
  }
}
// delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // find user with his id and deleted
     await User.deleteOne({ _id: id });
    res.send({ msg: "suprimer avec succès" });
  } catch (error) {
    res.status(400).send({ msg: "échéc suprimer", error });
  }
};
// ***********rooms management************//
// get all Rooms
exports.getAllRooms=async(req,res)=>{
    try {
    const allRooms=await Room.find()
    res.status(200).send(allRooms)
} catch (error) {
    res.send({errors:[{msg:"probléme des salles"}]})
}
}
// change room status
exports.ChangeStatus=async(req,res)=>{
try {
  let result=await Room.updateOne( { _id: req.params.id },
      { $set: { status:req.body.status,addsum:req.body.addsum,starting:req.body.starting } });
   res.status(200).send({ msg: "status updated successfully" ,result});
} catch (error) {
  res.status(400).send({ errors: [{ msg: "can not update this demande", error }] });
}
}
// delete Room
exports.deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    // find romm with  id and deleted
    await Room.deleteOne({ _id: id });
    res.send({ msg: "salle suprimer " });
  } catch (error) {
    res.status(400).send({ msg: "échéc suprimer", error });
  }
};