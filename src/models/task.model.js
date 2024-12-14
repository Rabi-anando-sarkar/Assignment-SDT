import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending','in-Progress','completed'],
    }
},{
    timestamps: true
})

export const Task = model("Task",taskSchema)