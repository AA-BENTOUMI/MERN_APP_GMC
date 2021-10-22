const { check, validationResult } = require('express-validator');

exports.roomVlidation=()=>[
check('roomName','insérer le nom du salle').not().isEmpty().trim(),
check('categorie','insérer une catégorie').not().isEmpty().trim(),
check('estimation','metter votre éstimation').not().isEmpty().trim().isNumeric(),
]

exports.validation=(req,res,next)=>{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });    
}
next()
}