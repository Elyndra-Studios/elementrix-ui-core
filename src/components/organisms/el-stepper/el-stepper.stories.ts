import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';


const meta: Meta = {
  title: 'Organisms/el-stepper',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const stepper = document.createElement('el-stepper');
    stepper.innerHTML = `
      <div style="padding: 1rem; border: 1px solid #e5e5e5; border-radius: 0.5rem;">Step 1</div>
      <div style="padding: 1rem; border: 1px solid #e5e5e5; border-radius: 0.5rem;">Step 2</div>
      <div style="padding: 1rem; border: 1px solid #e5e5e5; border-radius: 0.5rem;">Step 3</div>
    `;
    return stepper;
  },
};
