import { RequestType } from "./RequestType";

export interface IRequest {
    requestType: RequestType;
    clientId: string;
    userId: string;
    token: string;
}