// app.js
const express = require('express');
const bookRoutes = require('./server/routes/bookRoutes');

const app = express();
app.use(express.json()); // pour parser le JSON

// Utiliser les routes
app.use('/api/books', bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
