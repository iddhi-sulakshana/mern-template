import { IBaseResponse, IUserResponse } from "../types/response";
import { ICreateUser, IUser, ILoginUser } from "../types/user";
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

export const createUserApi = async (
    userData: ICreateUser
): Promise<IUserResponse> => {
    try {
        const response = await api.post<IUserResponse>(
            "/users/signup",
            userData
        );
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const loginUserApi = async (
    userData: ILoginUser
): Promise<IBaseResponse> => {
    try {
        console.log(userData);
        const response = await api.post<IBaseResponse>(
            "/users/login",
            userData
        );
        return { ...response.data, headers: response.headers };
    } catch (err) {
        throw err;
    }
};
