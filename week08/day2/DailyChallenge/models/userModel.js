const { db } = require('../config/db.js')
const bcrypt = require('bcrypt')


// const _getAllUsers = async () => {
//     const posts = await db('users')
//     .select("id", "email", "username", "first_name", "last_name", "password" )
//     .orderBy("id")
//     return posts
// }


const _createUser = async (userInfo) => {
    const {email, username, first_name, last_name, password} = userInfo
    const trx = await db.transaction()

    try {
        const [newUser] = await trx('users')
        .insert([
            {email, username, first_name, last_name}
        ], ['id', 'username']
        );

        const hashpwd = await bcrypt.hash("" + password, 10);

        await trx('hashpwd')
        .insert([
            {
            username: newUser.username,
            password: hashpwd
            }
        ], ['id', 'username']
        )
        await trx.commit()
        return newUser

    } catch (error) {
        await trx.rollback()
        throw error
    }
}

const _getUserByUsername = async (username, email) =>{
    try {
        const user = await db('users')
        .select("users.id","users.username", "hashpwd.password")
        .join('hashpwd', {"users.username": "hashpwd.username"})
        .where("users.username", username)
        .orWhere("users.email", email)
        .first()
        return user
    } catch (error) {
        console.log(error);
        throw error
    }
}

const _getAllUser = async () =>{
    try {
        const users = await db('users')
        return users
    } catch (error) {
        console.log(error);
        throw error
    }
}

const _getUserById = async (id) =>{
    try {
        const user = await db('users')
        .select("users.id","users.username", "hashpwd.password")
        .join('hashpwd', {"users.username": "hashpwd.username"})
        .where("users.id", id)
        .first()
        return user
    } catch (error) {
        console.log(error);
        throw error
    }
}

const _updateUserById = async (id, userInfo) =>{
        const trx = await db.transaction()
        try {
        const {email, username, first_name, last_name, password} = userInfo

        
        const user = await trx('users')
        .update({
            email, first_name, last_name
        }, ['id', 'username']
        )
        .where("id", id)
        
        const hashpwd = await bcrypt.hash("" + password, 10);

        // await trx('hashpwd')
        // .update([
        //     {
        //     password: hashpwd
        //     }
        // ], ['id', 'username']
        // )
        // .where("username", username)
        await trx.commit()


        return user
    } catch (error) {
        await trx.rollback();
        console.log(error);
        throw error
    }
}


module.exports = {
    _createUser,
    _getUserByUsername,
    _getAllUser,
    _getUserById,
    _updateUserById
}