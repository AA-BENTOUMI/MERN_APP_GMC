const isBuyer=(req,res,next)=>{
    if(req.user.role="buyer"){
        next()
    }
     res.status(401).send({errors:{msg:"non autorisé"}})
}
module.exports=isBuyer