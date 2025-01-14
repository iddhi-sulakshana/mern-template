export interface IUser {
    name: string;
    email: string;
    avatarUrl?: string;
}

export interface ICreateUser {
    name: string;
    email: string;
    avatarUrl?: string;
    password: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IAuthContext {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}
