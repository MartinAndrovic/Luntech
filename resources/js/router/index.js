import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/home/Home.vue";
import Login from "@/auth/auth-pages/Login.vue";
import Register from "@/auth/auth-pages/Register.vue";
import {useAuthStore} from "../stores/auth.js";
import AuthLayout from "../auth/AuthLayout.vue";
import { watch } from 'vue';

function waitUntil(conditionFn) {
    return new Promise((resolve) => {
        const stop = watch(conditionFn, (value) => {
            if (value) {
                stop();
                resolve();
            }
        });
    });
}

const routes = [
    {
        path: '/auth', component: AuthLayout, children: [
            {path: 'login', component: Login},
            {path: 'register', component: Register}
        ]
    },

    {path: '/', name: 'home', component: Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async(to, from, next) => {
    const auth = useAuthStore();
    console.log(to.path, 'loading je', auth.isUserLoading)

    if (to.path !== 'auth/login' && auth.isUserLoading) {
        console.log('cakam')
        await waitUntil(() => !auth.isUserLoading);
    }

    console.log('v beforeEach je user', auth.user)
    if (auth.user == null && to.path !== '/auth/login' && to.path !== '/auth/register') {
        next('/auth/login')
    } else {
        next()
    }
});

export default router;
