import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Molecules/el-form-field',
  
};

export default meta;

type Story = StoryObj;

export const WithInput: Story = {
  render: () => {
    const field = document.createElement('el-form-field');
    field.setAttribute('label', 'Email');
    field.setAttribute('hint', 'We will never share your email');

    const input = document.createElement('el-input');
    input.setAttribute('slot', 'control');
    input.setAttribute('type', 'email');
    input.setAttribute('placeholder', 'you@example.com');

    field.appendChild(input);

    return field;
  },
};

export const WithError: Story = {
  render: () => {
    const field = document.createElement('el-form-field');
    field.setAttribute('label', 'Password');
    field.setAttribute('error', 'Password must be at least 8 characters');

    const input = document.createElement('el-input');
    input.setAttribute('slot', 'control');
    input.setAttribute('type', 'password');

    field.appendChild(input);

    return field;
  },
};
