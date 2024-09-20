const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3200;

app.use(cors());
app.use(bodyParser.json());

let players = [
  { id: 2, name: 'Juan', number: 1, position: 1 },
  { id: 3, name: 'Unai', number: 4, position: 2 }
];

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/data', (req, res) => {
  res.json(players);
});

app.post('/player', (req, res) => {
  const newPlayer = req.body;
  newPlayer.id = players.length ? players[players.length - 1].id + 1 : 1;
  players.push(newPlayer);
  res.json(newPlayer);
});

app.put('/player/:id', (req, res) => {
  const playerId = parseInt(req.params.id, 10);
  const updatedPlayer = req.body;
  players = players.map(player => (player.id === playerId ? updatedPlayer : player));
  res.json(updatedPlayer);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
