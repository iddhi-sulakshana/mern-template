import type { IUser } from "./user";

// Base Request (UnAuthenticated)
export interface UnAuthenticatedRequest extends Request {}

// Base Request (Authenticated)
export interface AuthenticatedRequest extends Request {
    user: IUser;
    header: (name: string) => string | undefined;
}
