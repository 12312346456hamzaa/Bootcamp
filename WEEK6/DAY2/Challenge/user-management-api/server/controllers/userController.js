const bcrypt = require('bcrypt');
const pool = require('../config/db');
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
  const { email, username, password, first_name, last_name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await pool.connect();
    try {
      const newUser = await userModel.createUser(
        { email, username, first_name, last_name },
        hashedPassword,
        client
      );
      res.status(201).json({ message: 'User registered', user: newUser });
    } catch (e) {
      await client.query('ROLLBACK');
      if (e.code === '23505') { // Duplicate key
        res.status(409).json({ message: 'Username or email already exists' });
      } else {
        res.status(500).json({ error: e.message });
      }
    } finally {
      client.release();
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { user, password: hash } = await userModel.getUserAndPasswordByUsername(username);
    if (!user || !hash) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const valid = await bcrypt.compare(password, hash);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.json({ message: 'Login successful', user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateUser = async (req, res) => {
  const { email, username, first_name, last_name } = req.body;
  try {
    const updated = await userModel.updateUser(req.params.id, { email, username, first_name, last_name });
    if (!updated) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated', user: updated });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
