import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const plugins = [
  react({
    fastRefresh: process.env.NODE_ENV !== 'test',
  }),
];

const config = {
  plugins,
};

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      ...config,
    };
  }

  return {
    ...config,
    define: {
      global: {},
    },
  };
});
