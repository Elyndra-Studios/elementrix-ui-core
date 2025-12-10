import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-tooltip',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <el-tooltip content="This is a tooltip" placement="top">
      <el-button slot="trigger">Hover me</el-button>
    </el-tooltip>
  `,
};
