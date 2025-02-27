import "express-async-errors";
import winston from "winston";

export default function () {
    // Configure logging
    winston.add(
        // Add a console transport for logging in development
        new winston.transports.Console({
            format: winston.format.printf(
                (log) => `[${log.level.toLocaleUpperCase()}] : ${log.message}`
            ),
        })
    );

    // Configure logging for the production environment
    if (process.env.NODE_ENV === "production") {
        // thrown exceptions logging for files
        winston.exceptions.handle(
            new winston.transports.File({ filename: "./logs/exceptions.log" })
        );
        // Add a file transport for regular logs
        winston.add(
            new winston.transports.File({ filename: "./logs/logfile.log" })
        );

        // Use `winston-mongodb` to log messages to the mongoDB
        // import mongoose from "mongoose";
        // import  'winston-mongodb';
        // const options = {
        //     db: mongoose.options.useDb("LoggerDB"),
        //     options: { useUnifiedTopology: true },
        //     collection: logs,
        //     capped: false,
        //     expireAfterSeconds: 2000000,
        //     leaveConnectionOpen: false,
        //     storeHost: false,
        //     metaKey: "additionalInfo",
        // };
        // winston.add(new winston.transports.MongoDB(options));
    }
}
