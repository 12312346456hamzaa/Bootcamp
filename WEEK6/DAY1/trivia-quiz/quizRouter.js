const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// GET /quiz : Start or continue the quiz
router.get('/', (req, res) => {
  // Initialize session if not present
  if (!req.session.quiz) {
    req.session.quiz = { index: 0, score: 0, finished: false };
  }

  const { index, finished } = req.session.quiz;

  if (finished) {
    return res.redirect('/quiz/score');
  }

  // Show current question
  const currentQ = triviaQuestions[index];
  res.send(`
    <h2>Question ${index + 1} of ${triviaQuestions.length}</h2>
    <form method="POST" action="/quiz">
      <p>${currentQ.question}</p>
      <input type="text" name="answer" required autocomplete="off" />
      <button type="submit">Submit</button>
    </form>
    <p>Score: ${req.session.quiz.score}</p>
  `);
});

// POST /quiz : Submit answer
router.post('/', (req, res) => {
  if (!req.session.quiz || req.session.quiz.finished) {
    return res.redirect('/quiz');
  }

  const { index, score } = req.session.quiz;
  const userAnswer = (req.body.answer || '').trim();
  const correctAnswer = triviaQuestions[index].answer;

  let feedback;
  let newScore = score;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedback = "<span style='color:green'>Correct!</span>";
    newScore++;
  } else {
    feedback = `<span style='color:red'>Incorrect!</span> The answer was: <b>${correctAnswer}</b>`;
  }

  req.session.quiz.score = newScore;
  req.session.quiz.index++;

  // Check if quiz finished
  if (req.session.quiz.index >= triviaQuestions.length) {
    req.session.quiz.finished = true;
    return res.send(`
      <p>${feedback}</p>
      <h3>Quiz Finished!</h3>
      <a href="/quiz/score">See your score</a>
    `);
  }

  // Show next question with feedback
  const nextQ = triviaQuestions[req.session.quiz.index];
  res.send(`
    <p>${feedback}</p>
    <h2>Question ${req.session.quiz.index + 1} of ${triviaQuestions.length}</h2>
    <form method="POST" action="/quiz">
      <p>${nextQ.question}</p>
      <input type="text" name="answer" required autocomplete="off" />
      <button type="submit">Submit</button>
    </form>
    <p>Score: ${req.session.quiz.score}</p>
  `);
});

// GET /quiz/score : Show final score
router.get('/score', (req, res) => {
  if (!req.session.quiz || !req.session.quiz.finished) {
    return res.redirect('/quiz');
  }

  res.send(`
    <h2>Your final score: ${req.session.quiz.score} / ${triviaQuestions.length}</h2>
    <form method="POST" action="/quiz/restart">
      <button type="submit">Play Again</button>
    </form>
  `);
});

// Optional: Restart the quiz
router.post('/restart', (req, res) => {
  req.session.quiz = null;
  res.redirect('/quiz');
});

module.exports = router;
