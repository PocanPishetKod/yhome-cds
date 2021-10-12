import { TokenStorage } from "../store/TokenStorage";
import { GetMessageHandler } from "./GetMessageHandler";
import { MessageMethod } from "./IMessage";
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

        MessageHandlerFactory._map[MessageMethod.Save.toString()]
            = (arg) => new SaveMessageHandler(arg);
        MessageHandlerFactory._map[MessageMethod.Get.toString()]
            = (arg) => new GetMessageHandler(arg);
        MessageHandlerFactory._map[MessageMethod.Remove.toString()]
            = (arg) => new RemoveMessageHandler(arg);

            console.log(MessageHandlerFactory._map);
    }

    public create(method: MessageMethod): IMessageHandler {
        return MessageHandlerFactory._map[method.toString()](new TokenStorage());
    }
}