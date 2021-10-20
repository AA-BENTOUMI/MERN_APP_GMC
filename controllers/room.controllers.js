const Room=require("../models/Room")

// create room
exports.addeRoom =async(req,res)=>{
    try {
        const newRomm=new Room({...req.body})
        await newRomm.save()
 res.send({msg:"salle créé avec succ",room:newRomm})
    } catch (error) {
    res.send({errors:[{msg:"échéc création du salle"}]})       
    }
}
// get profile
exports.getAllRooms=async(req,res)=>{
    try {
    const allRooms=await Room.find()
    res.status(200).send(allRooms)
} catch (error) {
    res.send({errors:[{msg:"probléme des salles"}]})
}
}
// get one romm
exports.getOneRoom = async (req, res) => {
  try {
    const { id } = req.params;
    // find user with his id and deleted
    let result = await Room.findOne({ _id: id });
    res.send( result );
  } catch (error) {
    res.status(400).send({ msg: "salle non trouvé", error });
  }
};

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