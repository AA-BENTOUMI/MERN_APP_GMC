const { check, validationResult } = require('express-validator');

exports.registerValidation=()=>[
  check('name','name is required').not().isEmpty(),
  check('email','insert a valid email').not().isEmpty().isEmail(),
  check('password','insert a valid password').not().isEmpty().isLength({ min: 6 }),
]
 

exports.loginValiation=()=>[
check('email','insert a valid email').not().isEmpty().isEmail(),
check('password','insert a valid password').isLength({ min: 5 }),
]
exports.validation=(req,res,next)=>{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });    
}
next()
}