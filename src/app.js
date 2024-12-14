import express from 'express'

const app = express();

app.use(express.json({
    limit: '16kb'
}))

import todoRoutes from './routes/todo.routes.js'

app.use('/api/v1/todos',todoRoutes)

export { app }