import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-toggle-group',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <el-toggle-group>
      <button style="padding: 0.5rem 1rem; border: none; background: transparent;">Left</button>
      <button style="padding: 0.5rem 1rem; border: none; background: transparent;">Center</button>
      <button style="padding: 0.5rem 1rem; border: none; background: transparent;">Right</button>
    </el-toggle-group>
  `,
};
