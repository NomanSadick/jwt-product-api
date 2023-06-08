// Task 1: Mongoose Schema and Model

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const productModel = mongoose.model("products", dataSchema);

module.exports = productModel;
