const { _createUser, _getUserByUsername, _getAllUser, _getUserById, _updateUserById } = require('../models/userModel.js')

const bcrypt = require('bcrypt')


// const getAllposts = async (req, res) => {
//     const posts = await _getAllPosts()
//     res.json(posts)
// }

// const getpostById = async (req, res) => {
//     const { id } = req.params
//     const posts = await _getPostById(id)
//     res.json(posts)
// }

const createUser = async (req, res) => {
    const { email, password, username, first_name, last_name } = req.body
    const userInfo = { email, password, username, first_name, last_name }

    try {
        newUser = await _createUser(userInfo)
        res.json({
            message:"new user registered",
            user:newUser
        })
            
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error creating user"})
    }
}

const loginUser = async (req, res) =>{
    const {username, email, password} = req.body
    const user = await _getUserByUsername(username, email)
    if (!user) {
        res.status(404).json({error:"user not found"})
    } else {
        if (await bcrypt.compare(""+password, user.password)) {
            res.json({message:"Login OK",
                user:{
                    userId:user.id,
                    username:user.username
                }})
        } else {
            res.status(400).json({error:"invalid credentials"})
        }
    }
}

const getAllUsers = async (req, res) =>{
    const {username, password} = req.body
    const users = await _getAllUser()
    res.json(users)
}

// const updatePost = async (req, res) => {
//     const { id } = req.params
//     const { title, content } = req.body
//     const post = await _updatePost(id, title, content)
//     res.json(post)
// }
const updateUserById = async (req, res) => {
    const { email, password, username, first_name, last_name } = req.body
    const userInfo = { email, password, username, first_name, last_name }
    const { id } = req.params

    try {
        newUser = await _updateUserById(id, userInfo)
        res.json({
            message:"new user registered",
            user:newUser
        })
            
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error creating user"})
    }
}

const getUserById = async (req, res) =>{
    const { id } = req.params
    const users = await _getUserById(id)
    res.json(users)
}

// const deletePost = async (req, res) => {
//     const { id } = req.params
//     const post = await _deletePost(id)
//     if (post == 0) {
//         res.sendStatus(404)
//     }
//     res.json(post)
// }



module.exports = { 
    createUser,
    loginUser,
    getAllUsers,
    updateUserById,
    getUserById
//     getAllposts,
//     getpostById, 
//     insertPost, 
//     updatePost, 
//     deletePost 
}



