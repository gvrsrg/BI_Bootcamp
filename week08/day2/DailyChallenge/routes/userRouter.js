const { createUser, loginUser, getAllUsers, getUserById, updateUserById } = require('../controllers/userController.js')
const express = require('express')
const router = express.Router()


router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
module.exports = {
    router
};