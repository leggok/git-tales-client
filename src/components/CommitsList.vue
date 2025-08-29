<template>
    <div>
        <h1>Commits</h1>
        <ul class="commit-list">
            <li v-for="commit in commits" :key="commit.id" class="commit-item">
                <a :href="commit.commit_url" target="_blank" rel="noopener" class="commit-message">
                    {{ commit.commit_message }}
                </a>
                <p class="commit-meta">
                    <span class="author">{{ commit.commit_sender_name }}</span>
                    •
                    <span class="date">{{
                        new Date(commit.commit_timestamp).toLocaleString()
                    }}</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { RepoService } from "../services";

    const props = defineProps<{
        id: number;
    }>();

    const commits = ref<any[]>([]);
    onMounted(async () => {
        const { commits: commitsData } = await RepoService.getRepoCommits(props.id);
        commits.value = commitsData.value;
    });
</script>

<style scoped>
    .commit-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .commit-item {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 1rem 1.25rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        transition: box-shadow 150ms ease;
    }

    .commit-item:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    }

    .commit-message {
        font-weight: 600;
        color: #1f2937; /* gray-800 */
        text-decoration: none;
    }

    .commit-message:hover {
        color: #111827; /* gray-900 */
        text-decoration: underline;
    }

    .commit-meta {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #6b7280; /* gray-500 */
    }

    .author {
        font-weight: 500;
    }
</style>
