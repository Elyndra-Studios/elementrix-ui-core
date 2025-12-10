import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Molecules/el-tooltip',
  
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus'],
    },
    visible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    content: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    trigger: 'hover',
    visible: false,
    disabled: false,
  },
  render: (args) => html`
    <el-tooltip 
      content="${args.content}" 
      placement="${args.placement}"
      trigger="${args.trigger}"
      ?visible="${args.visible}"
      ?disabled="${args.disabled}">
      <el-button slot="trigger">Hover me</el-button>
    </el-tooltip>
  `,
};

export const ClickTrigger: Story = {
  args: {
    content: 'Click triggered tooltip',
    placement: 'bottom',
    trigger: 'click',
  },
  render: (args) => html`
    <el-tooltip 
      content="${args.content}" 
      placement="${args.placement}"
      trigger="${args.trigger}">
      <el-button slot="trigger">Click me</el-button>
    </el-tooltip>
  `,
};
