const express = require('express');
const session = require('express-session');
const quizRouter = require('./quizRouter');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'quiz_secret', 
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Trivia Quiz Game!</h1>
    <a href="/quiz">Start the Quiz</a>
  `);
});

app.use('/quiz', quizRouter);

app.listen(PORT, () => {
  console.log(`Trivia Quiz app running on http://localhost:${3000}`);
});
