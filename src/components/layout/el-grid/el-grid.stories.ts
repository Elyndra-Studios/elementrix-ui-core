import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Layout/el-grid',
  
  argTypes: {
    cols: { control: 'number' },
    responsive: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    cols: 3,
  },
  render: (args) => html`
    <el-grid cols="${args.cols}" ?responsive="${args.responsive}">
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 1</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 2</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 3</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 4</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 5</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 6</div>
    </el-grid>
  `,
};

export const Responsive: Story = {
  args: {
    responsive: true,
  },
  render: (args) => html`
    <el-grid ?responsive="${args.responsive}">
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 1</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 2</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 3</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 4</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 5</div>
      <div style="padding: 2rem; background: #f5f5f5; border-radius: 0.5rem; text-align: center;">Item 6</div>
    </el-grid>
  `,
};
