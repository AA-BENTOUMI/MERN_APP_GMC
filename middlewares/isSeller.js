const isSeller = (req, res, next) => {
 if(req.user.role) {
   if (req.user.role == "seller") {
    next();
  } else {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
}else null
;}
module.exports = isSeller;