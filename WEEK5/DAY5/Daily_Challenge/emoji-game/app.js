const express = require('express');
const path = require('path');
const app = express();

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🌞', name: 'Sun' },
  { emoji: '🍎', name: 'Apple' },
  { emoji: '👑', name: 'Crown' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '⚽', name: 'Football' }
];

let leaderboard = []; // { name, score }

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// GET /api/game - renvoie un emoji random et options
app.get('/api/game', (req, res) => {
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correct = emojis[correctIndex];

  // Sélectionne 3 distracteurs
  let options = [correct.name];
  while (options.length < 4) {
    const distractor = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(distractor)) options.push(distractor);
  }

  // Mélange les options
  options = options.sort(() => Math.random() - 0.5);

  res.json({
    emoji: correct.emoji,
    correct: correct.name, // pour vérif côté client (ne pas envoyer côté prod, ici c'est simple)
    options
  });
});

// POST /api/guess - vérifie la réponse et retourne score + feedback
app.post('/api/guess', (req, res) => {
  const { guess, correct, score } = req.body;
  const isCorrect = guess === correct;
  res.json({ isCorrect, score: isCorrect ? score + 1 : score });
});

// POST /api/leaderboard - enregistre le score final
app.post('/api/leaderboard', (req, res) => {
  const { name, score } = req.body;
  leaderboard.push({ name, score });
  // Garde les 5 meilleurs
  leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);
  res.json({ leaderboard });
});

// GET /api/leaderboard - top scores
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Emoji Game server at http://localhost:${PORT}`);
});
