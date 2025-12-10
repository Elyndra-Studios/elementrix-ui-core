import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-pagination',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    total: 100,
    page: 1,
    pageSize: 10,
  },
  render: (args) => html`
    <el-pagination
      total="${args.total}"
      page="${args.page}"
      page-size="${args.pageSize}">
    </el-pagination>
  `,
};
