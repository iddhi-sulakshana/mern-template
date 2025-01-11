import { IUser } from "../types/user";
import api from "../utils/api";

export const getUsersApi = async (): Promise<IUser[]> => {
    try {
        const response = await api.get<IUser[]>("/users");
        return response.data;
    } catch (err) {
        console.error("Error fetching users", err);
        throw err;
    }
};

export const createUserApi = async (userData: IUser): Promise<IUser> => {
    try {
        const response = await api.post<IUser>("/users", userData);
        return response.data;
    } catch (err) {
        console.error("Error fetching users", err);
        throw err;
    }
};
