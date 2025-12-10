import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-select',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <el-select placeholder="Choose an option">
      <div style="padding: 0.5rem; cursor: pointer;">Option 1</div>
      <div style="padding: 0.5rem; cursor: pointer;">Option 2</div>
      <div style="padding: 0.5rem; cursor: pointer;">Option 3</div>
    </el-select>
  `,
};
