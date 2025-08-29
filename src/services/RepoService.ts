import { API_BASE_URL } from "../config";

export default class RepoService {
    static async getRepos() {
        const response = await fetch(`${API_BASE_URL}/repos`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        return response.json();
    }

    static async getRepo(id: number) {
        const response = await fetch(`${API_BASE_URL}/repos/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        return response.json();
    }

    static async getRepoCommits(id: number) {
        const response = await fetch(`${API_BASE_URL}/repos/${id}/commits`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        return response.json();
    }
}
