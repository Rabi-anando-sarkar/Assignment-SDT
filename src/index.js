import dotenv from 'dotenv'
import connectDB from './db'
import { app } from './app'
import { PORT } from './constants'

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.on('error',(error) => {
            console.log(`:: Error => ${error} ::`);
            throw error
        })
        app.listen(PORT || 8000, () => {
            console.log(`:: Server is running at Port => ${PORT} ::`);
        })
    })
    .catch((error) => {
        console.log(`MONGO DB CONNECTION FAILED!!! :: ${error}`);
    })