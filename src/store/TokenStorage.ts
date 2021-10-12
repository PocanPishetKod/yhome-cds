export class TokenStorage {
    private buildKey(clientId: string, userId: string): string {
        return clientId + userId;
    }

    public save(clientId: string, userId: string, token: string): void {
        localStorage.setItem(this.buildKey(clientId, userId), token);
    }

    public get(clientId: string, userId: string): string {
        return localStorage.getItem(this.buildKey(clientId, userId));
    }

    public remove(clientId: string, userId: string): void {
        localStorage.removeItem(this.buildKey(clientId, userId));
    }
}