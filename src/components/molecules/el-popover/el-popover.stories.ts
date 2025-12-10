import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Molecules/el-popover',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const popover = document.createElement('el-popover');
    popover.setAttribute('placement', 'bottom');

    const button = document.createElement('el-button');
    button.setAttribute('slot', 'trigger');
    button.textContent = 'Click me';

    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.innerHTML = '<p>This is popover content with more detail.</p>';

    popover.appendChild(button);
    popover.appendChild(content);

    return popover;
  },
};
