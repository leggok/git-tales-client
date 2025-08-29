<script setup lang="ts">
    // No imports needed; components are provided via router
</script>

<template>
    <nav class="nav">
        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/login">Login</RouterLink> |
        <RouterLink to="/register">Register</RouterLink>
    </nav>

    <router-view />
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
