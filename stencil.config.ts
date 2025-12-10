import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'elementrix-ui',
  buildDist: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'dist/custom-elements.json',
    },
    {
      type: 'www',
      dir: 'www',
      serviceWorker: null,
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/styles.scss'],
    }),
  ],
};
