import mongoose from "mongoose";
import winston from "winston";
import { DB, ENV, MONGODB_URI } from "./environment";

export default async function () {
    winston.info("Establishing connection to database");

    // Constructing the MongoDB connection string based on the environment
    // connection string passed with the database name and it will be
    // concatenated with the environment making different databases for
    // different environments.
    const databaseString = `${MONGODB_URI}/${DB}_${ENV}?authSource=admin`;

    winston.info("Connecting to database with mongodb at: " + databaseString);

    try {
        // Attempting to connect to MongoDB using Mongoose
        await mongoose.connect(databaseString, {
            writeConcern: { w: "majority" },
        });

        winston.info("🟩 Connected to database successfully");
    } catch (ex: any) {
        // Logging failure to connect and exiting the process with an error code
        winston.error("🟥 Failed to connect to database: " + ex.message);
        process.exit(1);
    }
}
