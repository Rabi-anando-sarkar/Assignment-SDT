import express from 'express'

const app = express();

import todoRoutes from './routes/todo.routes.js'

app.use('/api/v1/todos',todoRoutes)

export { app }