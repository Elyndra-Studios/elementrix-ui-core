import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Atoms/el-textarea',
  
  argTypes: {
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
  render: (args) => html`
    <el-textarea
      rows="${args.rows}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}">
      ${args.value || ''}
    </el-textarea>
  `,
};

export const WithError: Story = {
  args: {
    rows: 4,
    error: 'This field is required',
  },
  render: (args) => html`
    <el-textarea
      rows="${args.rows}"
      error="${args.error}">
    </el-textarea>
  `,
};
