import axios from "axios";

// Create an instance of axios with base URL and timeout
const api = axios.create({
    // @ts-ignore
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor to add the JWT token to the request header
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            config.headers["x-auth-token"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
