var jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAuth=async(req,res,next)=>{
try {
    const token=req.headers["authorization"]
    if(!token){
    return res.status(401).send({errors:[{msg:"unauthorized"}]})
    }
    var decoded = jwt.verify(token, process.env.SECRET_KEY);
    if(!decoded){
     return res.status(401).send({errors:[{msg:"unauthorized"}]})
    }
    const findUser= await User.findById(decoded._id)
    req.user=findUser
  next()  
} catch (error) {
    return res.status(401).send({errors:[{msg:"unauthorized"}]})
  
}
}
module.exports=isAuth