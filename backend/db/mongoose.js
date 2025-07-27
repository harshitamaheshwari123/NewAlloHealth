const mongoose = require("mongoose");
const path = require("path");

// Load the .env file from the backend folder
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

console.log("Connecting to:", process.env.DB_URI); // Must print real URI

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error;
  }
};

module.exports = connectToDatabase;
