const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

module.exports = {
  registerUser: async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    const user = { username, password, email, first_name, last_name };

    try {
      const userInfo = await userModel.createUser(user);
      res.status(201).json({
        message: "User registered successfullt",
        user: userInfo,
      });
    } catch (error) {
      console.log(error.code);
      if (error.code == 23505) {
        return res
          .status(200)
          .json({ messgae: "Email or Username already exist" });
      }
      res.status(500).json({ error: "internal server error" });
    }
  },
  loginUser: async (req, res) => {
    const { email, username, password } = req.body;

    try {
      const user = await userModel.getUserByUsername(email, username);

      if (!user) {
        return res.status(404).json({ messgae: "user not found, ...." });
      }

      const passwordMatch = await bcrypt.compare(password + "", user.password);

      if (!passwordMatch) {
        return res.status(401).json({ messgae: "Authentication failed..." });
      }

      res.json({
        message: "Login succesfull",
        user: { userid: user.id, username: user.username },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  },
};
