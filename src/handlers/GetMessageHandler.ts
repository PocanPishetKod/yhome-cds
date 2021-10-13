import { TokenStorage } from "../store/TokenStorage";
import { IMessage } from "./IMessage";
import { IMessageHandler } from "./IMessageHandler";
import { IMessageHandlerResult } from "./IMessageHandlerResult";

export class GetMessageHandler implements IMessageHandler {
    private readonly _tokenStorage: TokenStorage;

    constructor(tokenStorage: TokenStorage) {
        this._tokenStorage = tokenStorage;
    }

    public handle(message: IMessage): IMessageHandlerResult {
        let token = this._tokenStorage.get();

        if (token == null) {
            throw new Error("token not found");
        }

        return { token: token };
    }
}