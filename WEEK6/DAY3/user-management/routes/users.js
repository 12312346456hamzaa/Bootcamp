const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const router = express.Router();

const USERS_FILE = './users.json';

// read users
function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return data ? JSON.parse(data) : [];
}

// write users
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
}

// POST /api/register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!firstName || !lastName || !email || !username || !password)
    return res.status(400).json({ message: 'All fields are required.' });

  let users = readUsers();
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    firstName, lastName, email, username,
    password: hashedPassword
  };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json({ message: 'Hello Your account is now created!' });
});

// POST /api/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  let users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: 'Username is not registered' });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Incorrect password' });
  }
  res.json({ message: `Hi ${username} welcome back again!` });
});

// GET /api/users
router.get('/users', (req, res) => {
  let users = readUsers();
  // Hide passwords
  users = users.map(u => {
    const { password, ...rest } = u;
    return rest;
  });
  res.json(users);
});

// GET /api/users/:id
router.get('/users/:id', (req, res) => {
  let users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  const { password, ...rest } = user;
  res.json(rest);
});

// PUT /api/users/:id
router.put('/users/:id', (req, res) => {
  let users = readUsers();
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: 'User not found' });

  const user = users[idx];
  // Allow updating firstName, lastName, email, username
  ['firstName', 'lastName', 'email', 'username'].forEach(field => {
    if (req.body[field]) user[field] = req.body[field];
  });

  users[idx] = user;
  writeUsers(users);
  res.json({ message: 'User updated', user });
});

module.exports = router;
