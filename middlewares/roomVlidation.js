const { check, validationResult } = require('express-validator');

exports.roomVlidation=()=>[
check('roomName','insert room name').not().isEmpty(),
check('categorie','choose a category').not().isEmpty(),
check('estimation','put your estimate').not().isEmpty().trim().isNumeric(),
]

exports.validation=(req,res,next)=>{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });    
}
next()
}