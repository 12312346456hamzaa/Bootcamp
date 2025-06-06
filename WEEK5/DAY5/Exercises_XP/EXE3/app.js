const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;

// Endpoint GET /api/posts pour récupérer les posts depuis JSONPlaceholder via le module
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Les données ont été récupérées et envoyées au client.');
    res.json(posts);
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error.message);
    res.status(500).json({ error: 'Impossible de récupérer les posts.' });
  }
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
