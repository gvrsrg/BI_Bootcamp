const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, password, email, first_name, last_name } = req.body;

  const user = { username, password, email, first_name, last_name };

  try {
    const userInfo = await userModel._createUser(user);
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
}

const loginUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await userModel._getUserByUsername(email, username);

    if (!user) {
      return res.status(404).json({ message: "user not found, ...." });
    }

    const passwordMatch = await bcrypt.compare(password + "", user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed..." });
    }

    res.json({
      message: "Login succesfull",
      user: { userid: user.id, username: user.username },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
}

const  getAllUsers = async (req, res) => {
  try {
    const users = await userModel._getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel._getUserById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, username, first_name, last_name } = req.body;

  try {
    const user = await userModel._updateUser(id, {
      email,
      username,
      first_name,
      last_name,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel._deleteUser(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
}

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
