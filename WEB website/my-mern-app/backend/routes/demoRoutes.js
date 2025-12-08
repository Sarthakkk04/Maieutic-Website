const express = require('express');
const router = express.Router();
const Demo = require('../models/Demo');

// create new demo request
router.post('/', async (req, res) => {
  try {
    const payload = req.body;

    // minimal validation: category required
    if (!payload.category) {
      return res.status(400).json({ error: 'category is required' });
    }

    const demo = new Demo(payload);
    await demo.save();
    return res.status(201).json({ message: 'Demo request saved', demo });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// (optional) get all demos (for admin)
router.get('/', async (req, res) => {
  const demos = await Demo.find().sort({ createdAt: -1 }).limit(100);
  res.json(demos);
});

module.exports = router;
