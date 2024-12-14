import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Task } from "../models/task.model.js";

// Create Task : Done
const createTasks = asyncHandler( async (req,res) => {
    const { title, description } = req.body;
    const task = new Task({
        title,
        description
    })

    if(!task) {
        throw new ApiError(
            400,
            "All Task field should be filled"
        )
    }

    await task.save()

    return res.status(201).json(
        new ApiResponse(
            200,
            "task created succesfully"
        )
    )
})

// Read Task : Done
const readTasks = asyncHandler( async (req,res) => {
    const tasks = await Task.find()
    
    if(!tasks) {
        throw new ApiError(
            500,
            'No Tasks Found'
        )
    }

    return res.status(201).json(
        new ApiResponse(
            200,
            tasks,
            'task fetched succesfully'
        )
    )
})

// Update Task : Done
const updateTasks = asyncHandler( async (req,res) => {
    const { status } = req.body;
    if(!['pending', 'in-progress', 'completed'].includes(status)) {
        throw new ApiError(
            400,
            'Invalid Status'
        )
    }

    const task = await Task.findByIdAndUpdate(req.params.id, {status},{ new:true})

    if(!task) {
        throw new ApiError(
            404,
            "Task not Found"
        )
    }

    return res
            .status(202)
            .json(
                new ApiResponse(
                    200,
                    task,
                    "Your Task Updated"
                )
            )
})

// Delete Task : Done

const deleteTasks = asyncHandler( async (req,res) => {
    const task = await Task.findByIdAndDelete(req.params.id)

    if(!task) {
        throw new ApiError(
            404,
            'Task not found'
        )
    }

    return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    "Task Deleted Succesfully"
                )
            )
})

export { 
    createTasks,
    readTasks,
    updateTasks,
    deleteTasks,
}