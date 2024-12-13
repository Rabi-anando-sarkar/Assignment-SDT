import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'
import { PORT } from './constants.js'

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