const { db } = require('../config/db.js')


const _getAllPosts = async () => {
    const posts = await db('posts')
    .select("id", "title", "content")
    .orderBy("id")
    return posts
}

const _getPostById = async (id) => {
    const post = await db('posts')
    .select("id", "title", "content")
    .where("id", id)
    .orderBy("id")
    return post
}

const _createPost = async (title, content) => {
    const post = await db('posts')
    .insert([
        {title: title,
        content: content
        },
    ], ['id', 'title', 'content']
    )
    return post
}

const _updatePost = async (id, title, content) => {
    const post = await db('posts')
    .where("id", id)
    .update(
        {
        title: title,
        content: content
        }, ['id', 'title', 'content']
    )

    return post
}

const _deletePost = async (id) => {
    const post = await db('posts')
    .del()
    .where("id", id)
    
    return post
}


module.exports = {
    _getAllPosts,
    _getPostById,
    _createPost,
    _updatePost,
    _deletePost
}
