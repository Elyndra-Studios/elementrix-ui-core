import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-image',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const image = document.createElement('el-image');
    image.setAttribute('src', 'https://via.placeholder.com/400x300');
    image.setAttribute('alt', 'Placeholder image');
    image.style.width = '400px';
    image.style.height = '300px';
    return image;
  },
};
