const isAdmin = (req, res, next) => {
  if (req.user.role == "admin") {
    next();
  } else {
        res.status(401).send({errors:{msg:"unauthorized"}})
  }
};
module.exports = isAdmin;