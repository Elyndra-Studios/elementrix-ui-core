import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
	title: 'Atoms/el-checkbox',

	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		checked: { control: 'boolean' },
		indeterminate: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	args: {
		label: 'Receive updates',
		size: 'md',
		checked: true,
		indeterminate: false,
		disabled: false,
	},
	render: args => html`
		<el-checkbox size="${args.size}" ?checked="${args.checked}" ?indeterminate="${args.indeterminate}" ?disabled="${args.disabled}"> ${args.label} </el-checkbox>
	`,
};

export const Checked: Story = {
	args: {
		label: 'I agree to the terms',
		size: 'md',
		checked: true,
		disabled: false,
	},
	render: args => html` <el-checkbox size="${args.size}" ?checked="${args.checked}" ?disabled="${args.disabled}"> ${args.label} </el-checkbox> `,
};

export const Indeterminate: Story = {
	args: {
		label: 'Select all',
		size: 'md',
		indeterminate: true,
		disabled: false,
	},
	render: args => html` <el-checkbox size="${args.size}" ?indeterminate="${args.indeterminate}" ?disabled="${args.disabled}"> ${args.label} </el-checkbox> `,
};

export const Disabled: Story = {
	args: {
		label: 'Disabled option',
		size: 'md',
		checked: false,
		disabled: true,
	},
	render: args => html` <el-checkbox size="${args.size}" ?checked="${args.checked}" ?disabled="${args.disabled}"> ${args.label} </el-checkbox> `,
};
