import { IMessage } from "./IMessage";
import { IMessageHandlerResult } from "./IMessageHandlerResult";

export interface IMessageHandler {
    handle(message: IMessage): IMessageHandlerResult;
}