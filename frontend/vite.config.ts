import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // @ts-ignore
        port: process.env.VITE_PORT || 5000,
    },
});
