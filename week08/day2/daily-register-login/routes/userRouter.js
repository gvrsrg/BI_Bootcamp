const express = require("express");
const router = express.Router();
const userControler = require("../controllers/userController.js");

// register route = register a new user
router.post("/register", userControler.registerUser);
router.post("/login", userControler.loginUser);

router.get("/all", userControler.getAllUsers);

module.exports = router;
