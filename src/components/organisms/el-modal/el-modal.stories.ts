import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-modal',
  
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    open: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args) => html`
    <el-modal size="md" ?open="${args.open}">
      <h2 slot="header">Modal Title</h2>
      <p>This is the modal content. Toggle the 'open' control to show/hide.</p>
      <div slot="footer">
        <el-button>Close</el-button>
      </div>
    </el-modal>
  `,
};
