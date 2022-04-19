module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls'],
  staticDirs: ['../src/assets'],
  core: {
    builder: '@storybook/builder-vite'
  },

  async viteFinal(config) {
    return { ...config,
      esbuild: { ...config.esbuild
      },
      rollupOptions: { ...config.rollupOptions,
        // Externalize deps that shouldn't be bundled
        external: ['react', 'react-dom'],
        output: {
          // Global vars to use in UMD build for externalized deps
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    };
  }

};