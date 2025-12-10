import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Atoms/el-badge',
  
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    pill: { control: 'boolean' },
    dot: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Default',
    variant: 'default',
    size: 'md',
  },
  render: (args) => html`
    <el-badge 
      variant="${args.variant}" 
      size="${args.size}"
      ?pill="${args.pill}"
      ?dot="${args.dot}">
      ${args.label}
    </el-badge>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <el-badge variant="default">default</el-badge>
      <el-badge variant="primary">primary</el-badge>
      <el-badge variant="success">success</el-badge>
      <el-badge variant="warning">warning</el-badge>
      <el-badge variant="error">error</el-badge>
      <el-badge variant="info">info</el-badge>
    </div>
  `,
};
