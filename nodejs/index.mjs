// index.mjs
import express from 'express';
import cors from 'cors';
import emailValidator from './routes/emailValidator.js'; // Import the email validator route

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the email validation route
app.use('/', emailValidator); // Mount the emailValidator route

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
