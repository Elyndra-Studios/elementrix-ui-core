import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-nav',
  
};

export default meta;

type Story = StoryObj;

export const Topbar: Story = {
  render: () => {
    const nav = document.createElement('el-nav');
    nav.setAttribute('variant', 'topbar');
    nav.innerHTML = `
      <a href="#" style="padding: 0.5rem 1rem;">Home</a>
      <a href="#" style="padding: 0.5rem 1rem;">About</a>
      <a href="#" style="padding: 0.5rem 1rem;">Contact</a>
    `;
    return nav;
  },
};
