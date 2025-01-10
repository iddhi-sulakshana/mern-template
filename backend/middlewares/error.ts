import type { NextFunction, Request, Response } from "express";
import winston from "winston";

// create an error handling middleware function
export default function (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // log the error message and error object
    winston.error("🟥 " + err.message);
    // set the HTTP response status to 500 and send the error message
    res.status(500).send(err.message);
}
