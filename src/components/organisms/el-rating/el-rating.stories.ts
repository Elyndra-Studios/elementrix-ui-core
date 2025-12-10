import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-rating',
  
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
    max: { control: 'number' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    allowHalf: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
    readonly: false,
    disabled: false,
    allowHalf: false,
  },
  render: (args) => html`
    <el-rating 
      value="${args.value}"
      max="${args.max}"
      ?readonly="${args.readonly}"
      ?disabled="${args.disabled}"
      ?allow-half="${args.allowHalf}">
    </el-rating>
  `,
};

export const Readonly: Story = {
  args: {
    value: 4,
    readonly: true,
  },
  render: (args) => html`
    <el-rating 
      value="${args.value}"
      ?readonly="${args.readonly}">
    </el-rating>
  `,
};

export const HalfStars: Story = {
  args: {
    value: 3.5,
    allowHalf: true,
  },
  render: (args) => html`
    <el-rating 
      value="${args.value}"
      ?allow-half="${args.allowHalf}">
    </el-rating>
  `,
};
