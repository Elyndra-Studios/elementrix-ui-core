import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Layout/el-spacer',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div>
      <div style="padding: 1rem; background: #f5f5f5;">Item 1</div>
      <el-spacer size="var(--el-space-8)"></el-spacer>
      <div style="padding: 1rem; background: #f5f5f5;">Item 2</div>
    </div>
  `,
};
