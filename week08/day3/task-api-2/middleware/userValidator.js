const { body, validationResult } = require('express-validator');


const loginValidation = [
  body('email','Invalid email format').isEmail(),
  body('password','Invalid password length').isLength({ min:3}),
]

const registerValidator = [
  body('email','Invalid email format').isEmail(),
  body('password','Invalid password length').isLength({ min:5}),
  body('name','Invalid first name length').isLength({ min:3}),
  body('lastName','Invalid last name length').isLength({ min:3}),
  body('username','Invalid username length').isLength({ min:3}),
]


const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }
    next()
}
 
  module.exports = {
    loginValidation,
    registerValidator,
    handleValidationErrors
  };