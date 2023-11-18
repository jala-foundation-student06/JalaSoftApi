const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Todo = require("../models/toDoModel");

exports.createTodo = asyncHandler(async (req, res) => {
  const { deadLines, categories, status, descriptions } = req.body;
  const todo = await Todo.create(deadLines, categories, status, descriptions);
  res.status(201).json({
    success: true,
    data: todo,
    message: "Created sucessfully",
  });
});
