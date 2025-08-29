<template>
    <div class="commits-container">
        <h2 class="heading">Commits</h2>
        <ul class="commit-list">
            <li
                v-for="commit in commits"
                :key="commit.id"
                class="commit-item"
                :style="{ '--accent-color': colorFor(commit.commit_message) }"
            >
                <img
                    :src="iconFor(commit.commit_message)"
                    :alt="`Icon for ${commit.commit_message}`"
                    class="icon"
                />
                <div class="commit-content">
                    <a
                        :href="commit.commit_url"
                        target="_blank"
                        rel="noopener"
                        class="commit-message"
                    >
                        {{ commit.commit_message }}
                    </a>
                    <p class="commit-meta">
                        <span class="author">{{ commit.commit_sender_name }}</span>
                        •
                        <span class="date">{{
                            new Date(commit.commit_timestamp).toLocaleString()
                        }}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, watch } from "vue";
    import { RepoService } from "../services";

    const props = defineProps<{
        id: number;
    }>();

    const commits = ref<any[]>([]);

    async function loadCommits(id: number) {
        const { commits: commitsData } = await RepoService.getRepoCommits(id);
        commits.value = commitsData.value;
    }

    function iconFor(message: string) {
        const lower = message.toLowerCase();
        if (lower.startsWith("fix:")) return "/icons/fix.svg";
        if (lower.startsWith("feat:") || lower.startsWith("feature:")) return "/icons/feature.svg";
        if (lower.startsWith("chore:")) return "/icons/chore.svg";
        if (lower.startsWith("styles:") || lower.startsWith("style:")) return "/icons/style.svg";
        return "/icons/neutral.svg";
    }

    function colorFor(message: string) {
        const lower = message.toLowerCase();
        if (lower.startsWith("fix:")) return "#ef4444"; // red-500
        if (lower.startsWith("feat:") || lower.startsWith("feature:")) return "#3b82f6"; // blue-500
        if (lower.startsWith("chore:")) return "#8b5cf6"; // purple-500
        return "#4b5563"; // gray-500
    }

    onMounted(() => loadCommits(props.id));

    watch(
        () => props.id,
        (newId) => {
            if (newId) loadCommits(newId);
        }
    );
</script>

<style scoped>
    .commits-container {
        padding: 1rem 1.5rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .heading {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #374151; /* gray-700 */
    }

    .commit-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .commit-item {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        background-color: #f9fafb;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border-left: 4px solid var(--accent-color);
    }

    .icon {
        width: 24px;
        height: 24px;
        margin-top: 0.2rem;
        flex-shrink: 0;
    }

    .commit-content {
        flex: 1;
    }

    .commit-item:hover {
        background-color: #f9fafb;
    }

    .commit-message {
        font-weight: 600;
        color: #1e40af; /* blue-800 */
        text-decoration: none;
    }

    .commit-message:hover {
        text-decoration: underline;
    }

    .commit-meta {
        margin-top: 0.25rem;
        font-size: 0.85rem;
        color: #6b7280; /* gray-500 */
    }

    .author {
        font-weight: 500;
    }
</style>
