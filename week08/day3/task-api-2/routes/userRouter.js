const express = require("express");
const router = express.Router();
const userControler = require("../controllers/userController.js");
const { registerValidator, loginValidation, handleValidationErrors } = require("../middleware/userValidator.js");

// register route = register a new user
router.post("/register", registerValidator, handleValidationErrors, userControler.registerUser);
router.post("/login", loginValidation, handleValidationErrors, userControler.loginUser);

// get route = get all users
router.get("/", userControler.getAllUsers);

// get route = get user by id
router.get("/:id", userControler.getUserById);

// update route = update user
router.put("/:id", registerValidator, handleValidationErrors, userControler.updateUser);

// delete route = delete user
router.delete("/:id", userControler.deleteUser);


module.exports = router;
