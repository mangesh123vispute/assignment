// models/Data.js

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String
});

module.exports = mongoose.model('Data', dataSchema);
