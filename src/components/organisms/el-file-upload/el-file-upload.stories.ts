import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Organisms/el-file-upload',
  
};

export default meta;

type Story = StoryObj;

export const Dropzone: Story = {
  render: () => {
    const upload = document.createElement('el-file-upload');
    upload.setAttribute('variant', 'dropzone');
    upload.setAttribute('multiple', '');
    return upload;
  },
};

export const Button: Story = {
  render: () => {
    const upload = document.createElement('el-file-upload');
    upload.setAttribute('variant', 'button');
    upload.setAttribute('multiple', '');
    return upload;
  },
};
