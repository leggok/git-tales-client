import { API_BASE_URL } from "../config";

export default class AuthService {
    static async register(name: string, email: string, password: string) {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        return response.json();
    }

    static async login(email: string, password: string) {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify({ email, password })
        });
        return response.json();
    }

    static async logout() {
        const response = await fetch(`${API_BASE_URL}/auth/logout`, {
            method: "POST"
        });
        return response.json();
    }
}
