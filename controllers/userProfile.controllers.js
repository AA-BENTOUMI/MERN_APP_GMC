const User = require("../models/User");

// get profile
// exports.getProfile=async(req,res)=>{
//     try {
//     const userProfile=await User.find({_id:req.params.id})
//     res.status(200).send(userProfile)
// } catch (error) {
//     res.send({errors:[{msg:"profile introuvable"}]})
// }
// }
// edit profile
exports.editProfile=async(req,res)=>{
    try {
    const {email}=req.body     
    const findUser= await User.findOne({email}) 
    if(((findUser)) || ((findUser) && (findUser !== req.body.email))){
    return res.status(400).send({errors:[{msg:"This email address is already in use"}]})
 }
    let result=await User.findByIdAndUpdate(req.params.id, req.body); 
    res.status(200).send({ msg: "proofile is updated", result }); 
    } catch (error) {
    res.status(400).send({errors:[{msg:"failed update"}]})
    }
}
// delete profile
exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    // find user with his id and deleted
    let result = await User.deleteOne({ _id: id });
    res.send({ msg: "successfully delete", result });
  } catch (error) {
    res.status(400).send({ msg: "failed delete", error });
  }
};