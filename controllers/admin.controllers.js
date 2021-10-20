const User = require("../models/User");

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