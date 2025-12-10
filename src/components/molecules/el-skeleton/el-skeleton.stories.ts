import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-skeleton',
  
};

export default meta;

type Story = StoryObj;

export const Text: Story = {
  render: () => html`<el-skeleton variant="text" rows="3"></el-skeleton>`,
};

export const Circle: Story = {
  render: () => html`<el-skeleton variant="circle"></el-skeleton>`,
};

export const Rectangle: Story = {
  render: () => html`<el-skeleton variant="rectangle"></el-skeleton>`,
};
