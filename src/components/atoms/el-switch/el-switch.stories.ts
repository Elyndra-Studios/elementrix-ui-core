import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Atoms/el-switch',
  
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    size: 'md',
    checked: false,
    disabled: false,
  },
  render: (args) => html`
    <el-switch
      size="${args.size}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}">
      ${args.label}
    </el-switch>
  `,
};

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    size: 'md',
    checked: true,
    disabled: false,
  },
  render: (args) => html`
    <el-switch
      size="${args.size}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}">
      ${args.label}
    </el-switch>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <el-switch size="sm">Small switch</el-switch>
      <el-switch size="md" checked>Medium switch (checked)</el-switch>
      <el-switch size="lg">Large switch</el-switch>
    </div>
  `,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    size: 'md',
    checked: false,
    disabled: true,
  },
  render: (args) => html`
    <el-switch
      size="${args.size}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}">
      ${args.label}
    </el-switch>
  `,
};
