import { Router } from "express";
import { createTasks } from "../controllers/todo.controller.js";

const router = Router()

router.route('/tasks').post(createTasks)

export default router