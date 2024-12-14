import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";

// Creating a new instance of the Express Router
const router = Router()

// POST /register - Create a new user
router.route('/register').post(register)

// POST /login - Logs in a user
router.route('/login').post(login)

export default router