const express = require('express');
const router = express.Router();

// Route pour la page d'accueil
router.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
});

// Route pour la page About
router.get('/about', (req, res) => {
  res.send('À propos de nous : Ceci est la page About.');
});

module.exports = router;
