import { defineConfig, loadEnv } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), EnvironmentPlugin('all')],
    define: {
      __APP_ENV__: env.APP_ENV,
      'process.env': process.env,
    },
  };
});
