
const { getAllposts, getpostById, insertPost, updatePost, deletePost } = require('../controllers/post.controller.js')


const express = require('express')

const router = express.Router()

router.get('/api/posts', getAllposts);
router.get('/api/posts/:id', getpostById);
router.post('/api/posts', insertPost);
router.put('/api/posts/:id', updatePost);
router.delete('/api/posts/:id', deletePost);


module.exports = {
    router
};