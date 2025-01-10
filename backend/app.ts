import "./config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import error from "./middlewares/error";
import routes from "./routes";

const app = express();

app.use(
    cors({
        // allow any origin
        // not great for the production environment
        origin: "*",
        // enable credentials for cookies
        credentials: true,
        // expose headers to the client
        exposedHeaders: ["auth-token"],
    })
);

// enable JSON parsing in the request body
app.use(express.json());
// enable URL-encoded parsing in the request body
app.use(express.urlencoded({ extended: true }));
// logging requests with morgan
app.use(morgan("tiny"));
// serve static files from the public directory
app.use(express.static("public"));
// error handling middleware
app.use(error);

// config routes
routes(app);

export default app;
