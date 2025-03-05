import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'elementrix-ui',
  globalStyle: 'src/styles/styles.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',  // Update this to point to 'loader' inside 'dist'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'www',
      serviceWorker: null, // Disable service worker
    },
  ],
  plugins: [
    sass({
      includePaths: ['src/styles'], // Ensure this path is correct
    }),
  ],
};
