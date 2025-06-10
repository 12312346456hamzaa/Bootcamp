const express = require('express');
const app = express();
const postsRoutes = require('./server/routes/posts');

app.use(express.json());

// Routes
app.use('/posts', postsRoutes);

// Invalid route handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server error' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
