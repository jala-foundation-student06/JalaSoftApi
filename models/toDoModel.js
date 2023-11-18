const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  deadLines: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model(`Todo`, todoSchema);

module.exports = Todo;
