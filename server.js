const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3300;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simple mock API for heethink cafe
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', store: 'heethink cafe', time: new Date() });
});

// Reservation endpoint
app.post('/api/reservation', (req, res) => {
  const { name, date, time, party } = req.body;
  res.json({
    success: true,
    message: `${name}님의 ${date} ${time} (${party}) 예약이 완료되었습니다.`,
    reservationId: 'RES-' + Date.now()
  });
});

// Order endpoint
app.post('/api/order', (req, res) => {
  const { items, totalAmount } = req.body;
  res.json({
    success: true,
    orderNumber: 'HT-' + Math.floor(100000 + Math.random() * 900000),
    totalAmount,
    timestamp: new Date()
  });
});

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`☕ heethink cafe web server running on http://localhost:${PORT}`);
});
