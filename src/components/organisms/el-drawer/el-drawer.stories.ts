import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-drawer',
  
  argTypes: {
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    open: { control: 'boolean' },
    closable: { control: 'boolean' },
    closeOnBackdrop: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    open: true,
    placement: 'right',
    size: 'md',
    closable: true,
    closeOnBackdrop: true,
  },
  render: (args) => html`
    <el-drawer 
      placement="${args.placement}"
      size="${args.size}"
      ?open="${args.open}"
      ?closable="${args.closable}"
      ?close-on-backdrop="${args.closeOnBackdrop}">
      <h2 slot="header">Drawer Title</h2>
      <p>This is the drawer content. Toggle the 'open' control to show/hide.</p>
      <div slot="footer">
        <el-button variant="secondary">Cancel</el-button>
        <el-button variant="primary">Save</el-button>
      </div>
    </el-drawer>
  `,
};

export const LeftPlacement: Story = {
  args: {
    open: true,
    placement: 'left',
    size: 'md',
  },
  render: (args) => html`
    <el-drawer 
      placement="${args.placement}"
      size="${args.size}"
      ?open="${args.open}">
      <h2 slot="header">Left Drawer</h2>
      <p>This drawer slides in from the left.</p>
    </el-drawer>
  `,
};
