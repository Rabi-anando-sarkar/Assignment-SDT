import express from 'express'

// Creating an instance of an Express application
const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json({
    limit: '16kb'
}))

// Importing route modules
import todoRoutes from './routes/todo.routes.js'
import userRoutes from './routes/user.routes.js'

// Mounting routes for todos and users

// Prefixing the todo routes with '/api/v1/todos'.
app.use('/api/v1/todos',todoRoutes)

// Prefixing the user routes with '/api/v1/users'.
app.use('/api/v1/users',userRoutes)

export { app }