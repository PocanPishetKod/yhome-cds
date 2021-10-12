import { MessageMethod } from "./handlers/IMessage";

export interface IRequest {
    messageMethod: MessageMethod;
    clientId: string;
    userId: string;
    token: string;
}