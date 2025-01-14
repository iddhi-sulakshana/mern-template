import type { IUser } from "./user";

// Base Request (Authenticated)
export interface IAuthenticatedRequest {
    user: IUser;
    header: (name: string) => string | undefined;
}

export interface ILoginRequest {
    email: string;
    password: string;
}
