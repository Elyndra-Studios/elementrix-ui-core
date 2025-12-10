import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-card',
  
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    hoverable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <el-card>
      <div slot="header"><strong>Card Title</strong></div>
      <p>This is the card body content.</p>
    </el-card>
  `,
};

export const Outlined: Story = {
  render: () => html`
    <el-card variant="outlined">
      <p>Outlined card variant</p>
    </el-card>
  `,
};

export const Hoverable: Story = {
  render: () => html`
    <el-card ?hoverable="${true}">
      <p>Hover over me</p>
    </el-card>
  `,
};
