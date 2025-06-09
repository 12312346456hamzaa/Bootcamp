const express = require('express');
const app = express();

// routeur principal
const indexRouter = require('./routes/index');

// routeur pour toutes les routes principales
app.use('/', indexRouter);

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
