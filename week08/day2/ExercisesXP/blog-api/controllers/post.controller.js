const { _getAllPosts, _getPostById, _createPost, _updatePost, _deletePost } = require('../models/post.model.js')


const getAllposts = async (req, res) => {
    const posts = await _getAllPosts()
    res.json(posts)
}

const getpostById = async (req, res) => {
    const { id } = req.params
    const posts = await _getPostById(id)
    res.json(posts)
}

const insertPost = async (req, res) => {
    const { title, content } = req.body
    const post = await _createPost(title, content)
    res.json(post)
}

const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    const post = await _updatePost(id, title, content)
    res.json(post)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    const post = await _deletePost(id)
    if (post == 0) {
        res.sendStatus(404)
    }
    res.json(post)
}



module.exports = { 
    getAllposts,
    getpostById, 
    insertPost, 
    updatePost, 
    deletePost 
}



