import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-file-upload',
  
  argTypes: {
    variant: {
      control: 'select',
      options: ['dropzone', 'button'],
    },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    accept: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj;

export const Dropzone: Story = {
  args: {
    variant: 'dropzone',
    multiple: true,
    disabled: false,
    accept: 'image/*',
  },
  render: (args) => html`
    <el-file-upload 
      variant="${args.variant}"
      ?multiple="${args.multiple}"
      ?disabled="${args.disabled}"
      accept="${args.accept}">
    </el-file-upload>
  `,
};

export const Button: Story = {
  args: {
    variant: 'button',
    multiple: true,
    disabled: false,
  },
  render: (args) => html`
    <el-file-upload 
      variant="${args.variant}"
      ?multiple="${args.multiple}"
      ?disabled="${args.disabled}">
    </el-file-upload>
  `,
};
