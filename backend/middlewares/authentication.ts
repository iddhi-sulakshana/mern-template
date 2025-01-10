import jwt from "jsonwebtoken";
import Users from "../models/user";
import type { NextFunction, Response } from "express";
import { JWT_SECRET } from "../config/environment";
import type { DecodedToken } from "../types/user";
import type { AuthenticatedRequest } from "../types/request";

export default async function (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) {
    // get the token from the header
    const token = req.header("x-auth-token");
    // if the token is not provided, return an error message
    if (!token) return res.status(401).send("Access denied. No token provided");
    // verify the token
    try {
        const decoded: DecodedToken = jwt.verify(
            token,
            JWT_SECRET
        ) as DecodedToken;
        // find the user with the provided id from database
        const user = await Users.findById(decoded._id);
        // if not user exist return an error message
        if (!user) return res.status(400).send("Invalid token");
        // expose the user object to the request object
        req.user = user;
        // call the next middleware
        next();
    } catch (error) {
        // if the token is invalid, return an error message
        res.status(400).send("Invalid token");
    }
}
