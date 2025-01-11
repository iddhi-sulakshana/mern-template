import { useMutation } from "@tanstack/react-query";
import { createUserApi } from "../services/users";

export default function useCreateUser() {
    return useMutation({
        mutationFn: createUserApi,
        onSuccess: (data) => {
            console.log("User created successfully", data);
            // invalidate queries and show success message
        },
        onError: (err) => {
            console.error("Error creating user", err);
            // show error message
        },
    });
}
