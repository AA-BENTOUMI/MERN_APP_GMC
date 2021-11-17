const isSeller = (req, res, next) => {
  if (req.user.role == "seller") {
    next();
  } else {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};
module.exports = isSeller;