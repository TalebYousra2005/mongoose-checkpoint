// creating the person prototype

const mongoose = require("mongoose");

const personeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFood: {
    type: [String],
  },
});

module.exports = mongoose.model("Person", personeSchema);
