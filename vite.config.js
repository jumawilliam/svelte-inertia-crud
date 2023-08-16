import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        svelte()
    ],
});
