import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-alert',
  
};

export default meta;

type Story = StoryObj;

export const Info: Story = {
  render: () => html`
    <el-alert variant="info">
      <span slot="title">Information</span>
      This is an informational alert.
    </el-alert>
  `,
};

export const Success: Story = {
  render: () => html`
    <el-alert variant="success">
      <span slot="title">Success</span>
      Operation completed successfully.
    </el-alert>
  `,
};

export const Dismissible: Story = {
  render: () => html`
    <el-alert variant="warning" ?dismissible="${true}">
      This alert can be dismissed.
    </el-alert>
  `,
};
