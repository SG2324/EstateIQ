const User = require("../models/User");

// GET all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE a user
exports.createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const user = await User.create({ name, email, role });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
