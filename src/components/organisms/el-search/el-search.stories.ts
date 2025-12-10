import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-search',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const search = document.createElement('el-search');
    search.setAttribute('placeholder', 'Search for anything...');
    return search;
  },
};
