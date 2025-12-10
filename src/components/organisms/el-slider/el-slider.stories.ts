import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-slider',
  
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    showValue: true,
  },
  render: (args) => html`
    <el-slider 
      value="${args.value}"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      ?disabled="${args.disabled}"
      ?show-value="${args.showValue}">
    </el-slider>
  `,
};

export const Range: Story = {
  args: {
    min: 0,
    max: 1000,
    step: 50,
  },
  render: (args) => html`
    <el-slider 
      value="250"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      ?show-value="${true}">
    </el-slider>
  `,
};
