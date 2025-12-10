import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Organisms/el-empty-state',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const empty = document.createElement('el-empty-state');
    empty.setAttribute('heading', 'No results found');
    empty.setAttribute('description', 'Try adjusting your search or filter to find what you are looking for.');

    const icon = document.createElement('span');
    icon.setAttribute('slot', 'icon');
    icon.textContent = '🔍';

    const actions = document.createElement('div');
    actions.setAttribute('slot', 'actions');
    const button = document.createElement('el-button');
    button.textContent = 'Clear filters';
    actions.appendChild(button);

    empty.appendChild(icon);
    empty.appendChild(actions);

    return empty;
  },
};
