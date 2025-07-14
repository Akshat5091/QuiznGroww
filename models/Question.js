const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  // THIS IS THE NEW FIELD WE ARE ADDING
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard'] // This ensures only these 3 values are allowed
  },
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);