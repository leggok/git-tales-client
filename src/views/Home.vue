<script setup lang="ts">
    import { ref } from "vue";
    import ReposList from "../components/ReposList.vue";
    import CommitsList from "../components/CommitsList.vue";

    const selectedRepoId = ref<number | null>(null);
</script>

<template>
    <h1>Welcome to Git Tales</h1>
    <p>This is the main page.</p>
    <ReposList @select="(id) => (selectedRepoId = id)" />

    <CommitsList v-if="selectedRepoId" :id="selectedRepoId" />
</template>
