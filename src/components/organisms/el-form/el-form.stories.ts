import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Organisms/el-form',
  
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const form = document.createElement('el-form');
    
    const field1 = document.createElement('el-form-field');
    field1.setAttribute('label', 'Email');
    const input1 = document.createElement('el-input');
    input1.setAttribute('slot', 'control');
    input1.setAttribute('type', 'email');
    field1.appendChild(input1);

    const field2 = document.createElement('el-form-field');
    field2.setAttribute('label', 'Password');
    const input2 = document.createElement('el-input');
    input2.setAttribute('slot', 'control');
    input2.setAttribute('type', 'password');
    field2.appendChild(input2);

    const button = document.createElement('el-button');
    button.textContent = 'Submit';

    form.appendChild(field1);
    form.appendChild(field2);
    form.appendChild(button);

    return form;
  },
};
