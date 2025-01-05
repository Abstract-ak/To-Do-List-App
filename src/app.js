// ? (Application Initialization)

const express = require("express");
const taskRoutes = require("./routes/tasks");
const app = express();

//Middleware
app.use(express.json()); //Parse JSON requests

//Routes
app.use("/tasks", taskRoutes);

module.exports = app;
