import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Atoms/el-button',
  
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'md',
  },
  render: (args) => html`
    <el-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      ?icon-only="${args.iconOnly}"
      ?full-width="${args.fullWidth}">
      ${args.label}
    </el-button>
  `,
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => html`
    <el-button variant="${args.variant}" size="${args.size}">
      ${args.label}
    </el-button>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 0.75rem; align-items: center;">
      <el-button size="xs">XS</el-button>
      <el-button size="sm">SM</el-button>
      <el-button size="md">MD</el-button>
      <el-button size="lg">LG</el-button>
      <el-button size="xl">XL</el-button>
    </div>
  `,
};

export const DangerFullWidth: Story = {
  args: {
    label: 'Danger full width',
    variant: 'danger',
    size: 'lg',
    fullWidth: true,
  },
  render: (args) => html`
    <el-button
      variant="${args.variant}"
      size="${args.size}"
      ?full-width="${args.fullWidth}">
      ${args.label}
    </el-button>
  `,
};
