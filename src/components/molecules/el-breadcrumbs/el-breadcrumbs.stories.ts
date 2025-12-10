import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-breadcrumbs',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <el-breadcrumbs>
      <li><a href="#">Home</a></li>
      <li>/</li>
      <li><a href="#">Products</a></li>
      <li>/</li>
      <li>Current Page</li>
    </el-breadcrumbs>
  `,
};
