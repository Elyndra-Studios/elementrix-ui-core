import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-chip',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<el-chip>Chip</el-chip>`,
};

export const Removable: Story = {
  render: () => html`<el-chip ?removable="${true}">Removable</el-chip>`,
};

export const Outlined: Story = {
  render: () => html`<el-chip variant="outlined">Outlined</el-chip>`,
};
