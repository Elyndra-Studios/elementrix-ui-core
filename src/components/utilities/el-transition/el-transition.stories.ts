import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Utilities/el-transition',
  
};

export default meta;

type Story = StoryObj;

export const Fade: Story = {
  render: () => {
    const button = document.createElement('el-button');
    button.textContent = 'Toggle';

    const transition = document.createElement('el-transition');
    transition.setAttribute('variant', 'fade');
    transition.setAttribute('show', '');

    const content = document.createElement('div');
    content.style.padding = '1rem';
    content.style.backgroundColor = '#f5f5f5';
    content.style.borderRadius = '0.5rem';
    content.textContent = 'This content fades in and out';

    transition.appendChild(content);

    button.addEventListener('click', () => {
      if (transition.hasAttribute('show')) {
        transition.removeAttribute('show');
      } else {
        transition.setAttribute('show', '');
      }
    });

    const wrapper = document.createElement('div');
    wrapper.appendChild(button);
    wrapper.appendChild(document.createElement('br'));
    wrapper.appendChild(document.createElement('br'));
    wrapper.appendChild(transition);

    return wrapper;
  },
};
