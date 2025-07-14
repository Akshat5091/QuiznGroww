const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/database');
const Question = require('../models/Question');
const questions = require('./data');

// Load env vars
dotenv.config({ path: './.env' });

// Connect to DB
connectDB();

// Function to import data
const importData = async () => {
  try {
    // First, delete all existing questions to avoid duplicates
    await Question.deleteMany();
    console.log('Old data destroyed...');

    // Then, insert all the new questions from our data file
    await Question.insertMany(questions);
    console.log('New data imported...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Function to delete data
const deleteData = async () => {
  try {
    await Question.deleteMany();
    console.log('All data destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// This checks the command you run in the terminal
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}