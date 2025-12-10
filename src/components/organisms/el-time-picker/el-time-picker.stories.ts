import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-time-picker',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<el-time-picker></el-time-picker>`,
};
