import type { StorybookConfig } from '@storybook/web-components-webpack5';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'], // Removed .mdx
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config: Configuration) => {
    if (!config.module) config.module = {};
    if (!config.module.rules) config.module.rules = [];

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: { transpileOnly: true },
        },
      ],
      exclude: /node_modules/,
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      exclude: /node_modules/,
    });

    if (!config.resolve) config.resolve = {};
    if (!config.resolve.extensions) config.resolve.extensions = [];
    config.resolve.extensions.push('.ts', '.tsx', '.css', '.scss');

    return config;
  },
};

export default config;
