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
    // get the req.body
    const { email, password } = req.body;
    // seach if the user exist
    const searchUser = await User.findOne({ email });

    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);

    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }

    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
}
