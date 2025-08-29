<template>
    <div>
        <h1>Repositories</h1>
        <ul class="repo-grid">
            <li
                v-for="repo in repos"
                :key="repo.repo_id"
                class="repo-card"
                @click="selectRepo(repo.repo_id)"
            >
                <span class="repo-link">{{ repo.repo_name }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { RepoService } from "../services";
    import { ref, onMounted } from "vue";

    const emit = defineEmits<{
        (e: "select", id: number): void;
    }>();

    const repos = ref<any[]>([]);

    onMounted(async () => {
        const { repositories } = await RepoService.getRepos();
        repos.value = repositories.value;
    });

    function selectRepo(id: number) {
        emit("select", id);
    }
</script>

<style scoped>
    /* Grid layout for repositories */
    .repo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 1rem;
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
    }

    /* Card styling */
    .repo-card {
        background: #ffffff;
        border: 1px solid #e5e7eb; /* Tailwind gray-200 */
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        transition: transform 150ms ease, box-shadow 150ms ease;
    }

    .repo-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    }

    /* Link styling */
    .repo-link {
        display: block;
        width: 100%;
        font-weight: 600;
        color: #1d4ed8; /* blue-700 */
        text-decoration: none;
        word-break: break-word;
    }

    .repo-link:hover {
        text-decoration: underline;
    }
</style>
