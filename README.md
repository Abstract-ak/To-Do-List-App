# To-Do List App: Folder Structure and Files

## Project Folder Structure

```
.
├── todo-list-app
    ├── node_modules/          # Dependencies installed via npm
    ├── src/                  # Source code folder
    │   ├── routes/           # Routes for API endpoints
    │   │   └── tasks.js      # Task-related route handlers
    │   ├── controllers/      # Logic for handling requests
    │   │   └── taskController.js
    │   ├── models/           # Data models or in-memory data structure
    │   │   └── taskModel.js
    │   ├── app.js            # App initialization and middleware setup
    ├── package.json          # Project metadata and dependencies
    ├── package-lock.json     # Exact dependency versions
    ├── README.md             # Project description and usage
    └── index.js              # Entry point for the server
```

# To-Do List App

A simple REST API for managing tasks.

## Features

- Add tasks
- Update tasks
- Delete tasks
- Fetch all tasks or a specific task

## Endpoints

### Create Task

- **POST** `/tasks`
- **Body**:
  ```json
  {
    "title": "Task Title"
  }
  ```

### Fetch All Tasks

- **GET** `/tasks`

### Fetch Task by ID

- **GET** `/tasks/:id`

### Update Task

- **PUT** `/tasks/:id`
- **Body**:
  ```json
  {
    "title": "Updated Title",
    "completed": true
  }
  ```

### Delete Task

- **DELETE** `/tasks/:id`

## Running the App

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Access the API at `http://localhost:3000/tasks`.

```

```
