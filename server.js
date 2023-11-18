const dotenv = require("dotenv");
const colors = require("colors");
const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const morgan = require("morgan");
const path = require("path");
const todoRoute = require("./routes/todo");

const connectDB = require("./db");
dotenv.config({ path: "./env" });
connectDB();

const app = express();
app.use(express.json());

if (process.env.MODE === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 3000;

app.use("/api/task", todoRoute);

app.use("/api/tasks", todoRoute);

app.get("/", (req, res) => {
  res.send("API is running successfully!!!");
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));
