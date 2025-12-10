import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-popover',
  
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    open: { control: 'boolean' },
    closeOnClickOutside: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    placement: 'bottom',
    open: false,
    closeOnClickOutside: true,
  },
  render: (args) => html`
    <el-popover 
      placement="${args.placement}"
      ?open="${args.open}"
      ?close-on-click-outside="${args.closeOnClickOutside}">
      <el-button slot="trigger">Click me</el-button>
      <div slot="content">
        <p style="margin: 0;">This is popover content with more detail.</p>
      </div>
    </el-popover>
  `,
};

export const WithHeader: Story = {
  args: {
    placement: 'bottom',
    open: true,
  },
  render: (args) => html`
    <el-popover placement="${args.placement}" ?open="${args.open}">
      <el-button slot="trigger">Info</el-button>
      <div slot="content">
        <div class="el-popover__header">Popover Title</div>
        <div class="el-popover__body">
          <p style="margin: 0;">This popover has a header and body structure.</p>
        </div>
      </div>
    </el-popover>
  `,
};
