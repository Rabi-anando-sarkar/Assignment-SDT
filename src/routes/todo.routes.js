import { Router } from "express";
import { createTasks, deleteTasks, readTasks, updateTasks } from "../controllers/todo.controller.js";
import authenticateToken from "../middlewares/token.middleware.js";

// Creating a new instance of the Express Router
const router = Router()

// Define routes for task management

// POST /tasks - Create a new task
router.route('/tasks').post(authenticateToken,createTasks)

// GET /tasks - Read all tasks
router.route('/tasks').get(authenticateToken,readTasks)

// PUT /tasks/:id - Update a task by its ID
router.route('/tasks/:id').put(authenticateToken,updateTasks)

// DELETE /tasks/:id - Delete a task by its ID
router.route('/tasks/:id').delete(authenticateToken,deleteTasks)

export default router