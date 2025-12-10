import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Organisms/el-drawer',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const button = document.createElement('el-button');
    button.textContent = 'Open Drawer';

    const drawer = document.createElement('el-drawer');
    drawer.setAttribute('placement', 'right');
    drawer.setAttribute('size', 'md');

    const header = document.createElement('h2');
    header.setAttribute('slot', 'header');
    header.textContent = 'Drawer Title';

    const body = document.createTextNode('This is the drawer content.');

    drawer.appendChild(header);
    drawer.appendChild(body);

    button.addEventListener('click', () => {
      drawer.setAttribute('open', '');
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(button);
    wrapper.appendChild(drawer);

    return wrapper;
  },
};
