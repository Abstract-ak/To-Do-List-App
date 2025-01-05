// ? (Application Initialization)

const express = require('express');

const app = express();

//Middleware
app.use(express.json());  //Parse JSON requests

//Routes

module.exports = app;