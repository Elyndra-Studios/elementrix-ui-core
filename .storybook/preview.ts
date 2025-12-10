// .storybook/preview.ts
import type { Preview } from '@storybook/web-components-vite';

// Load global design tokens / base styles so stories pick up the theme.
import '../src/global/styles.scss';

// Register Stencil components using the loader
import { defineCustomElements } from '../dist/loader';
defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
    },
    layout: 'padded',
  },
};

export default preview;
