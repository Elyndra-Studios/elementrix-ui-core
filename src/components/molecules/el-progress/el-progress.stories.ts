import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-progress',
  
};

export default meta;

type Story = StoryObj;

export const Bar: Story = {
  render: () => html`
    <el-progress variant="bar" value="65" ?show-value="${true}"></el-progress>
  `,
};

export const Circle: Story = {
  render: () => html`
    <el-progress variant="circle" value="75" ?show-value="${true}"></el-progress>
  `,
};
