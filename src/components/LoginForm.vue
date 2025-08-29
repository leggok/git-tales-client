<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { AuthService } from "../services";

    const router = useRouter();
    const email = ref("");
    const password = ref("");

    async function handleSubmit() {
        try {
            const response = await AuthService.login(email.value, password.value);
            console.log(response);
            // TODO: you might want to persist auth token here
            router.push("/");
        } catch (error) {
            console.error(error);
        } finally {
            email.value = "";
            password.value = "";
        }
    }
</script>

<template>
    <form @submit.prevent="handleSubmit" class="login-form">
        <h2>Login</h2>
        <div class="form-field">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" required />
        </div>

        <div class="form-field">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" required />
        </div>

        <button type="submit">Login</button>
    </form>
</template>

<style scoped>
    .login-form {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .form-field {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 0.25rem;
        font-weight: 600;
    }

    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.75rem;
        border: none;
        background-color: #42b883;
        color: white;
        font-weight: bold;
        cursor: pointer;
        border-radius: 4px;
    }

    button:hover {
        background-color: #369d6b;
    }
</style>
