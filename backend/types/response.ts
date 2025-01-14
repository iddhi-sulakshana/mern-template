import type { IUserLimit } from "./user";

// Base Response
export interface IBaseResponse {
    status: number;
    message: string;
    data?: any;
    page?: number;
    pageSize?: number;
    totalRecords?: number;
}

export interface IUserResponse extends IBaseResponse {
    data?: IUserLimit[];
}
