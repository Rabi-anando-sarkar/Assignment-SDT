import { Router } from "express";
import { createTasks, deleteTasks, readTasks, updateTasks } from "../controllers/todo.controller.js";
import authenticateToken from "../middlewares/token.middleware.js";

const router = Router()

router.route('/tasks').post(authenticateToken,createTasks)
router.route('/tasks').get(authenticateToken,readTasks)
router.route('/tasks/:id').put(authenticateToken,updateTasks)
router.route('/tasks/:id').delete(authenticateToken,deleteTasks)

export default router