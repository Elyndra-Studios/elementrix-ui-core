import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-sidebar',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const sidebar = document.createElement('el-sidebar');
    sidebar.setAttribute('collapsible', '');
    sidebar.innerHTML = `
      <div style="padding: 1rem;">
        <h3>Sidebar Content</h3>
        <p>Navigation items go here</p>
      </div>
    `;
    return sidebar;
  },
};
