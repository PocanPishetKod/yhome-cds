const tokenKey: string = "_token_key";

export class TokenStorage {

    public save(token: string): void {
        localStorage.setItem(tokenKey, token);
    }

    public get(): string {
        return localStorage.getItem(tokenKey);
    }

    public remove(): void {
        localStorage.removeItem(tokenKey);
    }
}