<template>
    <div class="repos-container">
        <div class="title">Repositories</div>
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
    .repos-container {
        display: flex;
        flex-direction: column;
        height: calc(100vh - 76px); /* fill viewport for aside */
        overflow-y: auto;
        background-color: #f3f4f6; /* gray-100 */
        border-right: 1px solid #e5e7eb;
        padding: 1rem 0.5rem;
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        color: #374151; /* gray-700 */
    }

    /* List layout */
    .repo-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    /* Card styling */
    .repo-card {
        background: #ffffff;
        border: 1px solid transparent;
        border-radius: 6px;
        padding: 0.75rem 1rem;
        cursor: pointer;
        transition: background-color 120ms ease, border-color 120ms ease;
    }

    .repo-card:hover {
        background-color: #f9fafb;
        border-color: #d1d5db;
    }

    /* Link styling */
    .repo-link {
        display: block;
        width: 100%;
        font-weight: 500;
        color: #111827; /* gray-900 */
        text-decoration: none;
        word-break: break-word;
    }

    .repo-link:hover {
        text-decoration: none;
    }
</style>
