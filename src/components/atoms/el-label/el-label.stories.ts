import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Atoms/el-label',
  
  argTypes: {
    required: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Email Address',
    for: 'email-input',
  },
  render: (args) => html`
    <el-label for="${args.for}" ?required="${args.required}">
      ${args.label}
    </el-label>
  `,
};

export const Required: Story = {
  args: {
    label: 'Password',
    required: true,
  },
  render: (args) => html`
    <el-label ?required="${args.required}">
      ${args.label}
    </el-label>
  `,
};
