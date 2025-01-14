import { useMutation } from "@tanstack/react-query";
import { createUserApi } from "../services/users";
import { toast } from "react-toastify";

export default function useCreateUser(reset: () => void) {
    return useMutation({
        mutationFn: createUserApi,
        onSuccess: (data) => {
            console.log("User created successfully", data);
            reset();
            toast.success(data.message);
        },
        onError: (err: any) => {
            console.error("Error creating user", err);
            if (err.response) {
                toast.error(err.response.data.message);
            }
        },
    });
}
