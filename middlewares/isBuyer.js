const isBuyer = (req, res, next) => {
 if(req.user.role) {
   if (req.user.role == "buyer") {
    next();
  } else {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
}else null
;}
module.exports = isBuyer;