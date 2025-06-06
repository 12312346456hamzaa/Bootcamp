let score = 0;
let correctAnswer = '';
let playing = true;

const scoreDiv = document.getElementById('score');
const emojiDiv = document.getElementById('emoji');
const optionsForm = document.getElementById('optionsForm');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const finishDiv = document.getElementById('finish');
const leaderboardUl = document.getElementById('leaderboard');
const saveBtn = document.getElementById('saveBtn');

function loadLeaderboard() {
  fetch('/api/leaderboard')
    .then(res => res.json())
    .then(list => {
      leaderboardUl.innerHTML = '';
      list.forEach(({ name, score }, idx) => {
        const li = document.createElement('li');
        li.textContent = `#${idx+1} ${name}: ${score}`;
        leaderboardUl.appendChild(li);
      });
    });
}

function getNewQuestion() {
  fetch('/api/game')
    .then(res => res.json())
    .then(data => {
      correctAnswer = data.correct;
      emojiDiv.textContent = data.emoji;
      feedbackDiv.textContent = '';
      nextBtn.style.display = 'none';
      finishDiv.style.display = 'none';
      optionsForm.innerHTML = '';
      data.options.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = option;
        label.appendChild(radio);
        label.append(' ' + option);
        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement('br'));
      });
      playing = true;
    });
}

optionsForm.onsubmit = (e) => {
  e.preventDefault();
  if (!playing) return;
  const data = new FormData(optionsForm);
  const guess = data.get('option');
  if (!guess) {
    feedbackDiv.textContent = "Select an answer!";
    return;
  }
  playing = false;
  fetch('/api/guess', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ guess, correct: correctAnswer, score })
  })
    .then(res => res.json())
    .then(res => {
      if (res.isCorrect) {
        feedbackDiv.textContent = 'Correct!';
        score = res.score;
      } else {
        feedbackDiv.textContent = 'Wrong! The answer was: ' + correctAnswer;
      }
      scoreDiv.textContent = `Score: ${score}`;
      nextBtn.style.display = '';
      // Optionnel: après 10 questions, finir la partie
      if (score >= 10) {
        finishDiv.style.display = '';
        nextBtn.style.display = 'none';
        playing = false;
      }
    });
};

nextBtn.onclick = () => getNewQuestion();

saveBtn.onclick = () => {
  const name = document.getElementById('playerName').value || "Anonymous";
  fetch('/api/leaderboard', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, score })
  })
  .then(res => res.json())
  .then(data => {
    loadLeaderboard();
    feedbackDiv.textContent = 'Score saved!';
    finishDiv.style.display = 'none';
    score = 0;
    scoreDiv.textContent = `Score: ${score}`;
    getNewQuestion();
  });
};

getNewQuestion();
loadLeaderboard();
