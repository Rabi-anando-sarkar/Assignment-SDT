import { Router } from "express";
import { createTasks, deleteTasks, readTasks, updateTasks } from "../controllers/todo.controller.js";

const router = Router()

router.route('/tasks').post(createTasks)
router.route('/tasks').get(readTasks)
router.route('/tasks/:id').put(updateTasks)
router.route('/tasks/:id').delete(deleteTasks)

export default router