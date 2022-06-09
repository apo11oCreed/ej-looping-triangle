import inject from '@rollup/plugin-inject';

export default {
    plugins: [
        // Add it first
        inject({
            $: 'jquery',
        }),
        // Other plugins...
    ],
    // The rest of your configuration...
};