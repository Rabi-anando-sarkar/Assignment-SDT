import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import generateToken from '../utils/TokenHandler.js'

// Register User : Done
const register = asyncHandler( async (req,res) => {
    const { username, password } = req.body

    if(
        [username,password].some((field) => field?.trim() === '')
    ) {
        throw new ApiError(
            400,
            "All fields are required"
        )
    }

    const existedUser = await User.findOne({
        $or: [{username}]
    })

    if(existedUser) {
        throw new ApiError(
            409,
            "This username is already taken please try again with a different username"
        )
    }

    const user = await User.create({
        username: username.toLowerCase(),
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if(!createdUser) {
        throw new ApiError(
            500,
            "Something went wrong while registering the user"
        )
    }

    return res
            .status(201)
            .json(
                new ApiResponse(
                    200,
                    createdUser,
                    "User registerd succesfully"
                )
            )
})

// Login User : Done

const login = asyncHandler ( async (req,res) => {
    const { username, password } = req.body

    if(!username) {
        throw new ApiError(
            400,
            "Please check your details again"
        )
    }

    const user = await User.findOne({username})

    if(!user) {
        throw new ApiError(
            404,
            "User Does not exist"
        )
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid) {
        throw new ApiError(
            401,
            "Invalid user credentials"
        )
    }

    const loggedInUser = await User.findById(user._id).select("-password")

    const token = generateToken(user)

    if(!token) {
        throw new ApiError(
            400,
            "Error generating token"
        )
    }

    console.log(token);
    

    return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        user: loggedInUser
                    },
                    "User Logged in Succesfully"
                )
            )

})

export {
    register,
    login,
}