import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: () => '/demo',
    },
    // demo
    {
        path: '/demo',
        component: () => import('@views/demo.vue'),
        meta: {
            name: 'Demo',
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
