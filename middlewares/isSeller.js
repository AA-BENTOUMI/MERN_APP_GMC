const isSeller=(req,res,next)=>{
    if(req.user.role="seller"){
        next()
    }
    res.status(401).send({errors:{msg:"unauthorized"}})
}
module.exports=isSeller