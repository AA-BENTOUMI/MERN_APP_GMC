const { check, validationResult } = require('express-validator');

exports.registerVlidation=()=>[
check('firstName','insérer votre prénom').not().isEmpty().trim(),
check('lastName','insérer votre nom').not().isEmpty().trim(),
check('email','vérifier votre e-mail').normalizeEmail().isEmail(),
check('password','vérifier mot de passe ').isLength({ min: 5 }),
check('phone','vérifier votre numéros de télephone').isLength({ min: 8 }),
check('role','choisie un role').not().isEmpty().trim(),
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