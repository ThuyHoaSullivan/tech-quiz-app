import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import path from 'path';

import db from '../config/connection.js'; // Adjusted path for dist structure
import { Question } from '../models/index.js'; // Adjusted path for dist structure
import cleanDB from './cleanDb.js';

// const dataPath = path.resolve('server/src/seeds/pythonQuestions.json');

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, 'pythonQuestions.json');

const questionData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

try {
  await db();
  await cleanDB();

  // bulk create each model
  await Question.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
