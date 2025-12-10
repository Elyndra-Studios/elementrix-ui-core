import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-slider',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const slider = document.createElement('el-slider');
    slider.setAttribute('value', '50');
    slider.setAttribute('min', '0');
    slider.setAttribute('max', '100');
    return slider;
  },
};
