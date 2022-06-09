import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';

export default defineConfig({
    base: '/assets/',
    plugins: [
        // Add it first
        inject({
            $: 'jquery',
        }),
        // Other plugins...
    ],
    // The rest of your configuration...
});