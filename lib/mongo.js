import mongoose from "mongoose";
//require('dotenv').config(); // Load environment variables from .env file
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const mongoURI = process.env.MONGODB_URI;
const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return; // If already connected
    // Get the MongoDB URI from the environment variables
    
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

export default connectToDatabase;