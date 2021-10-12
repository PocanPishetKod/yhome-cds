export enum MessageMethod {
    Save = 0,
    Get = 1,
    Remove = 2
}

export interface IMessage {
    clientId: string;
    userId: string;
    token: string;
}