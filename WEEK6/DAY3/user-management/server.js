const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files 
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
