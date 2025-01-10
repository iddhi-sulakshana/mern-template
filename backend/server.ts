import winston from "winston";
import app from "./app";
import { ENV, PORT } from "./config/environment";
import print_routes from "./utils/print_routes";

app.listen(PORT, () => {
    winston.info(`📡 Server is listening on ${PORT}`);
    if (ENV === "development") {
        winston.info("🟨 Server is running in development mode.");
        winston.info("🔗 Available Endpoints: ");
        app._router.stack.forEach(print_routes.bind(null, []));
    }
});
