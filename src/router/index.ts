import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: () => '/demo',
    },
    // demo
    {
        path: '/demo',
        component: () => import('@demo/demo.vue'),
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
