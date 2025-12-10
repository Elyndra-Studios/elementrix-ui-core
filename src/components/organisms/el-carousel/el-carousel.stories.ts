import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Organisms/el-carousel',
  
  argTypes: {
    autoplay: { control: 'boolean' },
    loop: { control: 'boolean' },
    showArrows: { control: 'boolean' },
    showDots: { control: 'boolean' },
    interval: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    autoplay: false,
    loop: true,
    showArrows: true,
    showDots: true,
    interval: 3000,
  },
  render: (args) => html`
    <el-carousel 
      ?autoplay="${args.autoplay}"
      ?loop="${args.loop}"
      ?show-arrows="${args.showArrows}"
      ?show-dots="${args.showDots}"
      interval="${args.interval}">
      <div style="height: 300px; background: linear-gradient(135deg, #6366f1, #4f46e5); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
        Slide 1
      </div>
      <div style="height: 300px; background: linear-gradient(135deg, #22c55e, #16a34a); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
        Slide 2
      </div>
      <div style="height: 300px; background: linear-gradient(135deg, #f59e0b, #d97706); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
        Slide 3
      </div>
    </el-carousel>
  `,
};

export const Autoplay: Story = {
  args: {
    autoplay: true,
    loop: true,
    interval: 2000,
  },
  render: (args) => html`
    <el-carousel 
      ?autoplay="${args.autoplay}"
      ?loop="${args.loop}"
      interval="${args.interval}">
      <div style="height: 200px; background: #6366f1; display: flex; align-items: center; justify-content: center; color: white;">1</div>
      <div style="height: 200px; background: #8b5cf6; display: flex; align-items: center; justify-content: center; color: white;">2</div>
      <div style="height: 200px; background: #06b6d4; display: flex; align-items: center; justify-content: center; color: white;">3</div>
    </el-carousel>
  `,
};
