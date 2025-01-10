import type { Express } from "express";
import userRoute from "./users";
export default function (app: Express) {
    // assign route paths
    app.use("/api/v1/users", userRoute);
}
