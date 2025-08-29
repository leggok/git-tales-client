<script setup lang="ts">
    import { ref } from "vue";
    import ReposList from "../components/ReposList.vue";
    import CommitsList from "../components/CommitsList.vue";

    const selectedRepoId = ref<number | null>(null);
</script>

<template>
    <div class="wrapper">
        <aside>
            <ReposList @select="(id) => (selectedRepoId = id)" />
        </aside>

        <main>
            <CommitsList v-if="selectedRepoId" :id="selectedRepoId" />
        </main>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    aside {
        width: 22%;
    }

    main {
        flex: 1;
        overflow-y: auto;
    }
</style>
