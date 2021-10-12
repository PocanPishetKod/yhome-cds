import { MessageHandlerFactory } from "./handlers/MessageHandlerFactory";
import { IRequest, IResponse } from "yhome-cds-interface/dist/index";

export class MessageEventHandler {
    private readonly _messageHandlerFactory: MessageHandlerFactory;

    constructor() {
        this._messageHandlerFactory = new MessageHandlerFactory();
    }

    private parseRequest(data: string): IRequest {
        return JSON.parse(data);
    }

    private sendResponse(response: IResponse, target: MessageEventSource,
        origin: string): void {
        target.postMessage(response, { targetOrigin: origin });
    }

    public handle(event: MessageEvent<string>): void {
        let request = this.parseRequest(event.data);
        let handler = this._messageHandlerFactory.create(request.requestType);
        try {
            let result = handler.handle(request);
            this.sendResponse({ ok: true, token: result.token }, 
                event.source, event.origin);
        }
        catch (error: any) {
            this.sendResponse({ ok: false, errorMessage: error.message },
                event.source, event.origin);
        }
    }
}