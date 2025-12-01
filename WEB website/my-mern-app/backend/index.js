const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Message = require('./models/Message');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('MongoDB is connected!');
});

// Updated POST route with validation
app.post('/api/messages', async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ message: '❗ Name and message are required' });
    }

    const newMessage = new Message({ name, message });
    await newMessage.save();

    res.status(201).json({ message: '✅ Message saved!' });
  } catch (err) {
    console.error('❌ Error saving message:', err.message);
    res.status(500).json({ message: '❌ Server error: ' + err.message });
  }
});

// MongoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
