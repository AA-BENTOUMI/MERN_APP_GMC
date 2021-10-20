const Room=require("../models/Room")

// create Room
exports.addeRoom =async(req,res)=>{
    try {
        const newRomm=new Room({...req.body})
        await newRomm.save()
 res.send({msg:"salle créé avec succ",room:newRomm})
    } catch (error) {
    res.send({errors:[{msg:"échéc création du salle"}]})       
    }
}
// get one Room
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

