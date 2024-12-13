import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const createTasks = asyncHandler( async (req,res) => {
    return res.status(201).json(
        new ApiResponse(
            200,
            "task created succesfully"
        )
    )
})

export { 
    createTasks
}