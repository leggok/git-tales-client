<script setup lang="ts">
    // No imports needed; components are provided via router
</script>

<template>
    <nav class="nav">
        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/login">Login</RouterLink> |
        <RouterLink to="/register">Register</RouterLink>
    </nav>

    <div class="container">
        <router-view />
    </div>
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

    .nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #f0f0f0;
        padding: 10px;
        z-index: 1;
    }

    .container {
        margin-top: 44px;
    }
</style>
