// ? Request Handling Logic

const tasks = require("../models/taskModel");

//  Fetch all tasks
exports.getTasks = (req, res) => {
  res.send(tasks);
};

//  Fetch a single task by ID
exports.getTaskById = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) return res.status(404).send({ error: "Task not found" });

  res.send(task);
};

//  Create a new task
exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).send({ error: "Task title is required" });
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).send(newTask);
};

//  Update a task
exports.updateTask = (req, res) => {
  const { title, completed } = req.body;
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send({ error: "Task not found" });

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.send(task);
};

// Delete a task
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send({ error: "Task not found" });

  const deletedTask = tasks.splice(index, 1);
  res.send(deletedTask[0]);
};
