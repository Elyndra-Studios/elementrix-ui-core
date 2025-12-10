import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Organisms/el-rating',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const rating = document.createElement('el-rating');
    rating.setAttribute('value', '3');
    return rating;
  },
};

export const Readonly: Story = {
  render: () => {
    const rating = document.createElement('el-rating');
    rating.setAttribute('value', '4');
    rating.setAttribute('readonly', '');
    return rating;
  },
};
