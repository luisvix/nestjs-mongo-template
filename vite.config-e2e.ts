/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globalSetup: './global-setup.js',
  },
});
