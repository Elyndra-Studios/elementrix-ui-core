import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Layout/el-container',
  
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    maxWidth: 'lg',
  },
  render: (args) => html`
    <el-container max-width="${args.maxWidth}">
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem;">
        <h2>Container Content</h2>
        <p>This content is constrained to a max-width with automatic centering.</p>
      </div>
    </el-container>
  `,
};
