import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import generateToken from '../utils/TokenHandler.js'

// Register User : Done
const register = asyncHandler( async (req,res) => {

    const { username, password } = req.body

    // check if any field is empty
    if(
        [username,password].some((field) => field?.trim() === '')
    ) {
        throw new ApiError(
            400,
            "All fields are required"
        )
    }

    // check if the user already exists
    const existedUser = await User.findOne({
        $or: [{username}]
    })

    if(existedUser) {
        throw new ApiError(
            409,
            "This username is already taken please try again with a different username"
        )
    }

    // create the new user and in lowercase 

    const user = await User.create({
        username: username.toLowerCase(),
        password
    })

    // storing user name in a varibale for later fetching

    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if(!createdUser) {
        throw new ApiError(
            500,
            "Something went wrong while registering the user"
        )
    }

    // send the response
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

    // check if credentials are correct
    if(!username) {
        throw new ApiError(
            400,
            "Please check your details again"
        )
    }

    // if user does not exist
    const user = await User.findOne({username})

    if(!user) {
        throw new ApiError(
            404,
            "User Does not exist"
        )
    }

    // validating password

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid) {
        throw new ApiError(
            401,
            "Invalid user credentials"
        )
    }

    // saving logged in user in a variable
    const loggedInUser = await User.findById(user._id).select("-password")

    // generating token
    const token = generateToken(user)

    if(!token) {
        throw new ApiError(
            400,
            "Error generating token"
        )
    }

    console.log(token);    

    // return response
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