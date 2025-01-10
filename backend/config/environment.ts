import dotenv from "dotenv-safe";

export default function () {
    dotenv.config();
}

// set environment

const variables = {
    ENV: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
    PORT: process.env.PORT || 3000,
    DB: process.env.DB,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET || "SECRET",
};

export const { ENV, PORT, DB, MONGODB_URI, JWT_SECRET } = variables;
