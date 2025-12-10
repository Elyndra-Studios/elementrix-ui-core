import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links'],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      // Add any custom Vite config here
    });
  }
};

export default config;
