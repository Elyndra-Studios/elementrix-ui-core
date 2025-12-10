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
    closable: { control: 'boolean' },
    closeOnBackdrop: { control: 'boolean' },
    persistent: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    open: true,
    size: 'md',
    closable: true,
    closeOnBackdrop: true,
    persistent: false,
  },
  render: (args) => html`
    <el-modal 
      size="${args.size}" 
      ?open="${args.open}"
      ?closable="${args.closable}"
      ?close-on-backdrop="${args.closeOnBackdrop}"
      ?persistent="${args.persistent}">
      <h2 slot="header">Modal Title</h2>
      <p>This is the modal content. Toggle the 'open' control to show/hide.</p>
      <div slot="footer">
        <el-button variant="secondary">Cancel</el-button>
        <el-button variant="primary">Confirm</el-button>
      </div>
    </el-modal>
  `,
};

export const Persistent: Story = {
  args: {
    open: true,
    size: 'sm',
    persistent: true,
  },
  render: (args) => html`
    <el-modal 
      size="${args.size}" 
      ?open="${args.open}"
      ?persistent="${args.persistent}">
      <h2 slot="header">Persistent Modal</h2>
      <p>This modal cannot be closed by clicking outside or the X button.</p>
      <div slot="footer">
        <el-button variant="primary">I understand</el-button>
      </div>
    </el-modal>
  `,
};
