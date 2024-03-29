import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    resolve: {
        alias: {
            '@views': resolve(process.cwd(), './src/views'),
            '@konva-ui': resolve(process.cwd(), './package'),
        },
    },
});
