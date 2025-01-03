import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`:: Connected to MONGO DATABASE => Name : ${connectionInstance.connection.name}::`);
    } catch (error) {
        console.log(`:: MONGO DATABASE CONNECTION FAILED => ${error}::`);
        process.exit(1)
    }
}

export default connectDB