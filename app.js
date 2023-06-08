// Basic Import
const express = require("express");
const app = express();
const router = require("./src/routes/api");

// Database Import
const mongoose = require("mongoose");


// Body-Parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// MongoDB Connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

connectToDatabase();

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("Disconnected from Localhost");
});

// routes middleware
app.use("/api/v1", router);

// Undefined Route
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "404 not found!",
  });
});

module.exports = app;
