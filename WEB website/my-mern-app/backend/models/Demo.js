const mongoose = require('mongoose');

const DemoSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  email: { type: String },
  jobTitle: { type: String },
  companyName: { type: String },
  companyWebsite: { type: String },
  city: { type: String },
  preferredSolution: { type: String },
  message: { type: String },
  category: { type: String, required: true }, // FinTech / InsurTech / ...
  consent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Demo', DemoSchema);
