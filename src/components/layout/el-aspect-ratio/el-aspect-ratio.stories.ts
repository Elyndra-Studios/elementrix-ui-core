import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Layout/el-aspect-ratio',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    ratio: '16/9',
  },
  render: (args) => html`
    <el-aspect-ratio ratio="${args.ratio}">
      <div style="width: 100%; height: 100%; background: #3b82f6; display: flex; align-items: center; justify-content: center; color: white;">
        16:9 Aspect Ratio
      </div>
    </el-aspect-ratio>
  `,
};
