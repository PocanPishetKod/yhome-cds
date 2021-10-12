import { TokenStorage } from "../store/TokenStorage";
import { IMessage } from "./IMessage";
import { IMessageHandler } from "./IMessageHandler";
import { IMessageHandlerResult } from "./IMessageHandlerResult";

export class RemoveMessageHandler implements IMessageHandler {
    private readonly _tokenStorage: TokenStorage;

    constructor(tokenStorage: TokenStorage) {
        this._tokenStorage = tokenStorage;
    }

    public handle(message: IMessage): IMessageHandlerResult {
        this._tokenStorage.remove(message.clientId, message.userId);
        return { token: null };
    }
}