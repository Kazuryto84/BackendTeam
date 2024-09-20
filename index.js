const express = require('express');
const app = express();
const port = process.env.PORT || 3200;

app.get('/', (req, res) => {
  res.send('API is running');
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
