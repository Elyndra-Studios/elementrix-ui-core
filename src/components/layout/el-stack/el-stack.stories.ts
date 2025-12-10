import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Layout/el-stack',
  
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => html`
    <el-stack direction="${args.direction}" gap="${args.gap}">
      <div style="padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">Item 1</div>
      <div style="padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">Item 2</div>
      <div style="padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">Item 3</div>
    </el-stack>
  `,
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => html`
    <el-stack direction="${args.direction}" gap="${args.gap}">
      <div style="padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">Item 1</div>
      <div style="padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">Item 2</div>
      <div style="padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">Item 3</div>
    </el-stack>
  `,
};
