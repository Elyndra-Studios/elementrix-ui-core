import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-dropdown',
  
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    open: { control: 'boolean' },
    closeOnSelect: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    placement: 'bottom',
    closeOnSelect: true,
  },
  render: (args) => html`
    <el-dropdown 
      placement="${args.placement}"
      ?open="${args.open}"
      ?close-on-select="${args.closeOnSelect}">
      <el-button slot="trigger">Menu</el-button>
      <div class="el-dropdown__item">Profile</div>
      <div class="el-dropdown__item">Settings</div>
      <div class="el-dropdown__divider"></div>
      <div class="el-dropdown__item el-dropdown__item--danger">Logout</div>
    </el-dropdown>
  `,
};
