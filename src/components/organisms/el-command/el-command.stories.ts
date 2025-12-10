import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Organisms/el-command',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const button = document.createElement('el-button');
    button.textContent = 'Open Command (⌘K)';

    const command = document.createElement('el-command');
    command.innerHTML = `
      <div style="padding: 0.5rem; cursor: pointer;">Search files...</div>
      <div style="padding: 0.5rem; cursor: pointer;">Go to dashboard</div>
      <div style="padding: 0.5rem; cursor: pointer;">Open settings</div>
    `;

    button.addEventListener('click', () => {
      command.setAttribute('open', '');
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(button);
    wrapper.appendChild(command);

    return wrapper;
  },
};
