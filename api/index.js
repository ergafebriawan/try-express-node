// api/index.js
const express = require('express');
const app = express();

// Middleware untuk parsing JSON body
app.use(express.json());

// Route sederhana
app.get('/api', (req, res) => {
  res.status(200).send('Hello from Vercel Express Serverless API!');
});

// Contoh route dengan parameter
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.status(200).send(`Hello, ${name}! Welcome to the serverless world.`);
});

// Contoh route POST
app.post('/api/echo', (req, res) => {
  const body = req.body;
  res.status(200).json({ received: body });
});

// Ekspor aplikasi Express
module.exports = app;