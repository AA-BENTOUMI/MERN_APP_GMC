const User=require("../models/User")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
// ***register function****
exports.Register=async(req,res)=>{
try {
 const {email}=req.body     
 const {password}=req.body     
 const findUser= await User.findOne({email}) 
 if(findUser){
    res.status(400).send({errors:[{msg:"This email address is already in use"}]})
     return
 }
 const newUser=new User({...req.body})
 const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;
  await newUser.save()
 res.send({msg:"registration was successful",user:newUser})
} catch (error) {
    res.send({errors:[{msg:"failed registration"}]})
}
}
// ***login function****
exports.Login=async(req,res)=>{
try {
   const {email,password}=req.body
    const findUser= await User.findOne({email}) 
 if(!findUser){
     res.status(400).send({errors:[{msg:"Incorrect email or password"}]})
     return;
 }
 const testPassword=bcrypt.compare(password, findUser.password)
 if(!testPassword){
     res.send({errors:[{msg:"Incorrect email or password"}]})
     return;
 }
 const token=jwt.sign({
  _id: findUser._id
}, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.send({msg:"Successful connection",user:findUser,token})
} catch (error) {
    res.send({errors:[{msg:"failed connection"}]}) 
}
}
