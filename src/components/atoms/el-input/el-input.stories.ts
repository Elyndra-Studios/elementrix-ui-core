import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Atoms/el-input',
  
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    size: 'md',
  },
  render: (args) => html`
    <el-input
      type="${args.type}"
      size="${args.size}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}">
    </el-input>
  `,
};

export const WithError: Story = {
  args: {
    type: 'email',
    placeholder: 'you@example.com',
    size: 'md',
    error: 'Please enter a valid email address',
  },
  render: (args) => html`
    <el-input
      type="${args.type}"
      size="${args.size}"
      placeholder="${args.placeholder}"
      error="${args.error}">
    </el-input>
  `,
};
