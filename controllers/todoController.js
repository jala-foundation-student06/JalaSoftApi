const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");

exports.createTodo = asyncHandler(async (req, res) => {
  const { deadLines, categories, status, descriptions } = req.body;
  const todo = await Todo.create({
    deadLines,
    categories,
    status,
    descriptions,
  });
  res.status(201).json({
    success: true,
    data: todo,
    message: "Created sucessfully",
  });
});

exports.updateTodo = asyncHandler(async (req, res) => {
  const { deadLines, categories, status, descriptions } = req.body;
  const existTodo = await Todo.findOne({ _id: req.params.id });
  if (existTodo) {
    existTodo.deadLines = deadLines;
    existTodo.categories = categories;
    existTodo.status = status;
    existTodo.descriptions = descriptions;
    const updatedTodo = await existTodo.save();
    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "Task is updated successfully",
    });
  } else {
    res.status(401).json({
      success: false,
      data: null,
      message: "Task is Not Found",
    });
  }
});

exports.deleteTodo = asyncHandler(async (req, res) => {
  const existTodo = await Todo.findOne({ _id: req.params.id });
  if (existTodo) {
    await existTodo.remove();
    res.status(200).json({
      success: true,
      message: "Task is deleted successfully",
    });
  } else {
    res.status(401).json({
      success: false,
      data: null,
      message: "Task is Not Found",
    });
  }
});

exports.getSingleTodo = asyncHandler(async (req, res) => {
  const existTodo = await Todo.findOne({ _id: req.params.id });
  if (existTodo) {
    res.status(200).json({
      success: true,
      data: existTodo,
      message: "Task is fetched successfully",
    });
  } else {
    res.status(401).json({
      success: false,
      data: null,
      message: "Task is Not Found",
    });
  }
});

exports.getAllTodo = asyncHandler(async (req, res) => {
  const allTodo = await Todo.find({});
  if (allTodo) {
    res.status(200).json({
      success: true,
      data: allTodo,
      message: "All Tasks are deleted successfully",
    });
  } else {
    res.status(401).json({
      success: false,
      data: null,
      message: "Tasks are Not Found",
    });
  }
});
