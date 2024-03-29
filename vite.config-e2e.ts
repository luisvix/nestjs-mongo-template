import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    globalSetup: './global-setup.js',
  },
  plugins: [swc.vite() as any],
});
