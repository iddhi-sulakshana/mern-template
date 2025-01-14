import { useMutation } from "@tanstack/react-query";
import { createUserApi, loginUserApi } from "../services/users";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export default function useLoginuser(reset: () => void) {
    const context = useAuth();
    return useMutation({
        mutationFn: loginUserApi,
        onSuccess: (data) => {
            if (!data.headers?.has("x-auth-token"))
                return toast.error("No headers were identified please retry.");

            reset();
            // @ts-ignore
            context?.login(data.headers?.get("x-auth-token")?.toString());
            toast.success(data.message);
        },
        onError: (err: any) => {
            console.error("Error Logging user", err);
            if (err.response) {
                toast.error(err.response.data.message);
            }
        },
    });
}
