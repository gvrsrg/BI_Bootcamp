const { db } = require("../config/db.js");
const bcrypt = require("bcrypt");


const _createUser = async (userinfo) => {
    const { username, password, email, first_name, last_name } = userinfo;

    const trx = await db.transaction();

    try {
      // insert user data into 'users' table
      const [user] = await trx("users").insert(
        { email, username, first_name, last_name },
        ["username", "id"]
      );

      //hash the password and insert into the' hashpwd table
      const hashPassword = await bcrypt.hash(password + "", 10);

      await trx("hashpwd").insert({
        username: user.username,
        password: hashPassword,
      });

      await trx.commit();

      return user;
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  }

const _getUserByUsername = async (email, username) => {
    try {
      const user = await db("users")
        .select("users.id", "users.username", "hashpwd.password")
        .join("hashpwd", { "users.username": "hashpwd.username" })
        .where("users.username", username)
        .orWhere("users.email", email)
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  }

const _getAllUsers = async () => {
    try {
      const users = await db("users");
      return users;
    } catch (error) {
      throw error;
    }
  }

const _getUserById = async (id) => {
    try {
      return await db("users").where({ id }).first();
    } catch (err) {
      throw err;
    }
  }
  
const _updateUser = async(id, userInfo) => {
    const { email, username, first_name, last_name } = userInfo;
    return await db.transaction(async (trx) => {
      try {
        const oldUser = await trx("users").where({ id }).first();
  
        if (email && email !== oldUser.email) {
          const existingEmail = await trx("users").where({ email }).first();
          if (existingEmail) {
            throw new Error("Email is already taken");
          }
        }
  
        if (username && username !== oldUser.username) {
          const existingUsername = await trx("users").where({ username }).first();
          if (existingUsername) {
            throw new Error("Username is already taken");
          }
        }
  
        await trx("users")
          .where({ id })
          .update({ email, username, first_name, last_name });
  
        await trx.commit();
        return true;
      } catch (error) {
        await trx.rollback();
        console.error("Transaction rolled back due to error:", error);
        throw error;
      }
    });
  }
  

module.exports = {
  _createUser,
  _getUserByUsername,
  _getAllUsers,
  _getUserById,
  _updateUser
};
