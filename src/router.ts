import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/login", name: "login", component: LoginForm },
    { path: "/register", name: "register", component: RegisterForm }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
