import type { IRouterHandler, Request, Response, RouterOptions } from "express";
import Users from "../models/user";
import { MongooseError } from "mongoose";
import type { IUser } from "../types/user";
import type { IBaseResponse, IUserResponse } from "../types/response";
import httpStatus from "../utils/status";
import { encrypt, validPassword } from "../utils/hash";
import type { ILoginRequest } from "../types/request";

export async function getUsers(): Promise<IUserResponse> {
    try {
        const users = await Users.find();
        return {
            status: httpStatus.OK,
            message: "OK",
            data: users,
        };
    } catch (err) {
        return {
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Error fetching users",
        };
    }
}

export async function createUser(user: IUser): Promise<IBaseResponse> {
    // check if user already exists
    const existingUser = await Users.findOne({ email: user.email });
    if (existingUser) {
        return {
            status: httpStatus.CONFLICT,
            message: "User already exists",
        };
    }

    try {
        const newUser = new Users(user);

        if (!newUser.password) {
            return {
                status: httpStatus.BAD_REQUEST,
                message: "Password is required",
            };
        }
        // decode the password
        newUser.password = await encrypt(newUser.password);

        await newUser.save();
        return {
            status: httpStatus.CREATED,
            message: "User created",
        };
    } catch (err) {
        // @ts-ignore
        if (err instanceof MongooseError && err.code === 11000) {
            return {
                status: httpStatus.CONFLICT,
                message: "Email already exists",
            };
        }
        return {
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Error creating user",
        };
    }
}

export async function loginUser(
    credintials: ILoginRequest
): Promise<IBaseResponse> {
    if (!credintials?.email)
        return {
            status: httpStatus.FORBIDDEN,
            message: "Email is required",
        };
    if (!credintials?.password)
        return {
            status: httpStatus.FORBIDDEN,
            message: "Password is required",
        };

    // check if the user is exist
    const user = await Users.findOne({ email: credintials.email });
    if (!user)
        return {
            status: httpStatus.FORBIDDEN,
            message: "Invalid email",
        };

    // check passwords are matching
    const isValid = await validPassword(credintials.password, user.password);

    if (!isValid)
        return {
            status: httpStatus.FORBIDDEN,
            message: "Invalid password",
        };

    // generate the token
    const token = user.generateAuthToken();

    return {
        status: httpStatus.OK,
        message: "Logged in successfully",
        data: token,
    };
}
