import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    resolve: {
        alias: {
            '@': resolve(process.cwd(), './src'),
            '@konva': resolve(process.cwd(), './src/lib'),
            '@demo': resolve(process.cwd(), './src/demo'),
        },
    },
});
