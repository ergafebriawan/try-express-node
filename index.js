// app.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Middleware untuk parsing body JSON
app.use(express.json());

// Contoh endpoint GET
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Halo dari aplikasi Express serverless!',
    timestamp: new Date().toISOString()
  });
});

// Contoh endpoint POST
app.post('/data', (req, res) => {
  const { name, value } = req.body;
  if (!name || !value) {
    return res.status(400).json({ message: 'Nama dan nilai diperlukan.' });
  }
  res.status(201).json({
    message: 'Data diterima!',
    receivedData: { name, value }
  });
});

// Export handler untuk serverless
module.exports.handler = serverless(app);

// Hanya untuk pengembangan lokal (opsional)
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server Express berjalan di http://localhost:${port}`);
  });
}