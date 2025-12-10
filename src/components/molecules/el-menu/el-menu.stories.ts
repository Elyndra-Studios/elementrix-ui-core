import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Molecules/el-menu',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const menu = document.createElement('el-menu');

    const item1 = document.createElement('el-menu-item');
    item1.setAttribute('active', '');
    item1.textContent = 'Dashboard';

    const item2 = document.createElement('el-menu-item');
    item2.textContent = 'Settings';

    const item3 = document.createElement('el-menu-item');
    item3.setAttribute('disabled', '');
    item3.textContent = 'Disabled';

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);

    return menu;
  },
};
