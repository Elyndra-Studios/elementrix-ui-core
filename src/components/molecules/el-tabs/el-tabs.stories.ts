import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-tabs',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <el-tabs>
      <div slot="tabs">
        <button>Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
      </div>
      <div slot="panels">
        <div>Panel 1 content</div>
      </div>
    </el-tabs>
  `,
};
