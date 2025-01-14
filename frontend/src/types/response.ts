import { AxiosHeaders } from "axios";
import type { IUser } from "./user";

// Base Response
export interface IBaseResponse {
    status: number;
    message: string;
    data?: any;
    page?: number;
    pageSize?: number;
    totalRecords?: number;
    headers?: AxiosHeaders;
}

export interface IUserResponse extends IBaseResponse {
    data?: IUser[];
}
