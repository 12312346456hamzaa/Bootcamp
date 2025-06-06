const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// "Base de données" temporaire en mémoire
const users = [];
const loginAttempts = {};

const SECRET = 'supersecretkey'; 

// Password complexity check (8+ caractères, majuscule, minuscule, chiffre)
function isPasswordStrong(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

// Middleware d’authentification JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token required' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// ROUTES

// Registration
app.post('/api/register', async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });

  if (!isPasswordStrong(password)) {
    return res.status(400).json({ error: 'Password too weak (8+ chars, upper, lower, digit)' });
  }

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword, role: role || 'user' });
  res.status(201).json({ message: 'User registered successfully' });
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  // Vérifier verrouillage compte
  if (loginAttempts[username] && loginAttempts[username].lockedUntil > Date.now()) {
    return res.status(403).json({ error: 'Account locked. Try again later.' });
  }

  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    // Gestion des tentatives échouées
    if (!loginAttempts[username]) loginAttempts[username] = { count: 0, lockedUntil: 0 };
    loginAttempts[username].count += 1;
    if (loginAttempts[username].count >= 5) {
      loginAttempts[username].lockedUntil = Date.now() + 2 * 60 * 1000; // 2 minutes lock
      return res.status(403).json({ error: 'Account locked. Try again later.' });
    }
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  // Réinitialiser les tentatives si connexion réussie
  loginAttempts[username] = { count: 0, lockedUntil: 0 };

  const token = jwt.sign({ username: user.username, role: user.role }, SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

// Profile (protégé, rôle user ou admin)
app.get('/api/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.username === req.user.username);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ username: user.username, role: user.role });
});

// Exemple : Route admin protégée par rôle
app.get('/api/admin', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
  res.json({ message: 'Bienvenue admin !' });
});

// Lancer le serveur
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
