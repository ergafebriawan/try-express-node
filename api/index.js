const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello this is trying serverless with express js'
  });
});

// Contoh route dengan parameter
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.status(200).json({
    message: `Hello, ${name}! Welcome to the serverless world.`
  });
});

// Contoh route POST
app.post('/api/echo', (req, res) => {
  const body = req.body;
  res.status(200).json({ received: body });
});

// Ekspor aplikasi Express
module.exports = app;