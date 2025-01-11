import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../services/users";

export const useGetUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsersApi,
    });
};
