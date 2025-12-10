import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Atoms/el-switch',
  
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    size: 'md',
  },
  render: (args) => html`
    <el-switch
      size="${args.size}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}">
      ${args.label}
    </el-switch>
  `,
};
