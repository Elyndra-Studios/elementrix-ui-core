import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-date-picker',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<el-date-picker></el-date-picker>`,
};
