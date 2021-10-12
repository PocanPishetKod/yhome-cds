import { RequestType } from "../RequestType";
import { TokenStorage } from "../store/TokenStorage";
import { GetMessageHandler } from "./GetMessageHandler";
import { IMessageHandler } from "./IMessageHandler";
import { RemoveMessageHandler } from "./RemoveMessageHandler";
import { SaveMessageHandler } from "./SaveMessageHandler";

export class MessageHandlerFactory {
    private static _map: object = null;

    constructor() {
        this.initialize();
    }

    private initialize(): void {
        if (MessageHandlerFactory._map != null) {
            return;
        }

        MessageHandlerFactory._map = {};

        MessageHandlerFactory._map[RequestType.Save.toString()]
            = (arg) => new SaveMessageHandler(arg);
        MessageHandlerFactory._map[RequestType.Get.toString()]
            = (arg) => new GetMessageHandler(arg);
        MessageHandlerFactory._map[RequestType.Remove.toString()]
            = (arg) => new RemoveMessageHandler(arg);

            console.log(MessageHandlerFactory._map);
    }

    public create(requestType: RequestType): IMessageHandler {
        return MessageHandlerFactory._map[requestType.toString()](new TokenStorage());
    }
}