import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express()

dotenv.config()

mongoose
  .connect(
    process.env.MONGODB_URI,
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})