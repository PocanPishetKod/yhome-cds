import { MessageEventHandler } from "./MessageEventHandler";

let messageHandler = new MessageEventHandler();
window.onmessage = (event: MessageEvent<string>) => {
    messageHandler.handle(event);
}