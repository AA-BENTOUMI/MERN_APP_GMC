const { check, validationResult } = require('express-validator');

exports.registerVlidation=()=>[
  check('name','insérer votre nom').not().isEmpty(),
  check('email','vérifier votre e-mail').isEmail(),
  check('password','vérifier mot de passe ').isLength({ min: 6 }),
]
 

exports.loginValiation=()=>[
check('email','vérifier votre e-mail').normalizeEmail().isEmail(),
check('password','vérifier mot de passe ').isLength({ min: 5 }),
]
exports.validation=(req,res,next)=>{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });    
}
next()
}