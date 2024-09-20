const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3200;

app.use(cors());

app.get('/', (req, res) => {
    res.json("Api loading OK");
  });

app.get('/data', (req, res) => {
  res.json([
    { id: 2, name: 'Juan', number: 1, position: 1 },
    { id: 3, name: 'Unai', number: 4, position: 2 }
  ]);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
