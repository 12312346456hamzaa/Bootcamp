const express = require('express');
const app = express();

app.use(express.json());

// Simuler une base de données avec un tableau en mémoire
let posts = [
  { id: 1, title: 'Premier post', content: 'Contenu du premier post' },
  { id: 2, title: 'Deuxième post', content: 'Contenu du deuxième post' }
];

// GET /posts 
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - Récupère un post par son id
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post non trouvé' });
  res.json(post);
});

// POST /posts - Crée un nouveau post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Titre et contenu requis' });
  }
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT 
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post non trouvé' });
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Titre et contenu requis' });
  }
  post.title = title;
  post.content = content;
  res.json(post);
});

// DELETE 
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Post non trouvé' });
  posts.splice(index, 1);
  res.json({ message: 'Post supprimé avec succès' });
});

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur' });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
