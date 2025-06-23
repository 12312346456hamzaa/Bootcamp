const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log('POST reçu :', req.body);
  res.send({
    message: `I received your POST request. This is what you sent me: ${req.body.post}`
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
