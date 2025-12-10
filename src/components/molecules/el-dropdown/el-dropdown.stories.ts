import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Molecules/el-dropdown',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const dropdown = document.createElement('el-dropdown');
    dropdown.setAttribute('placement', 'bottom');

    const button = document.createElement('el-button');
    button.setAttribute('slot', 'trigger');
    button.textContent = 'Menu';

    const item1 = document.createElement('div');
    item1.textContent = 'Item 1';
    item1.style.padding = '0.5rem';
    item1.style.cursor = 'pointer';

    const item2 = document.createElement('div');
    item2.textContent = 'Item 2';
    item2.style.padding = '0.5rem';
    item2.style.cursor = 'pointer';

    dropdown.appendChild(button);
    dropdown.appendChild(item1);
    dropdown.appendChild(item2);

    return dropdown;
  },
};
