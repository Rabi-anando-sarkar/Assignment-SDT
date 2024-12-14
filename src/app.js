import express from 'express'

const app = express();

app.use(express.json({
    limit: '16kb'
}))

import todoRoutes from './routes/todo.routes.js'
import userRoutes from './routes/user.routes.js'

app.use('/api/v1/todos',todoRoutes)
app.use('/api/v1/users',userRoutes)

export { app }