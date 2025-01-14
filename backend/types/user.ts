import type { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    avatarUrl?: string;
    password: string;
    generateAuthToken: () => string;
}

export interface IUserLimit extends Document {
    name: string;
    email: string;
    avatarUrl?: string;
}

export interface DecodedToken {
    _id: string;
    iat?: number; // Issued at (optional)
    exp?: number; // Expiration time (optional)
}
