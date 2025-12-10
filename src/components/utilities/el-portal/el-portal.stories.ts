import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Utilities/el-portal',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const portal = document.createElement('el-portal');
    portal.setAttribute('target', 'body');
    
    const content = document.createElement('div');
    content.style.padding = '1rem';
    content.style.backgroundColor = '#3b82f6';
    content.style.color = 'white';
    content.style.borderRadius = '0.5rem';
    content.textContent = 'This content is portaled to body';

    portal.appendChild(content);

    return portal;
  },
};
