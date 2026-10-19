import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({build:{rollupOptions:{input:{workout:fileURLToPath(new URL('./workout/index.html',import.meta.url)),home:fileURLToPath(new URL('./index.html',import.meta.url)),drone:fileURLToPath(new URL('./drone/index.html',import.meta.url))}}}});
