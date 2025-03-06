import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
	title: 'Atoms/Button',
	component: 'elx-button',
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		variant: {
			control: { type: 'select'},
			options: ['primary', 'secondary', 'danger'],
		},
		disabled: {
			control: { type: 'boolean' },
		},
		text: {
			control: { type: 'text' },
			defaultValue: 'Button Text',
		},
		theme: {
			control: { type: 'select' },
			options: ['light', 'dark', 'custom'],
			defaultValue: 'light',
		},
		customTheme: {
			control: { type: 'text' },
			defaultValue: '',
			description: 'URL to custom theme stylesheet',
		},
	},
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
	args: {
		size: 'small',
		variant: 'primary',
		disabled: false,
		text: 'Primary Button',
		theme: 'light',
		customTheme: '',
	},
	render: args => {
		return `<elx-button size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" theme="${args.theme}" customTheme="${args.customTheme}">${args.text}</elx-button>`;
	},
};

export const Secondary: Story = {
	args: {
		size: 'small',
		variant: 'secondary',
		disabled: false,
		text: 'Secondary Button',
		theme: 'light',
		customTheme: '',
	},
	render: args => {
		return `<elx-button size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" theme="${args.theme}" customTheme="${args.customTheme}">${args.text}</elx-button>`;
	},
};

export const Disabled: Story = {
	args: {
		size: 'small',
		variant: 'primary',
		disabled: true,
		text: 'Disabled Button',
		theme: 'light',
		customTheme: '',
	},
	render: args => {
		return `<elx-button size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" theme="${args.theme}" customTheme="${args.customTheme}">${args.text}</elx-button>`;
	},
};

export const CustomTheme: Story = {
	args: {
		size: 'medium',
		variant: 'primary',
		disabled: false,
		text: 'Custom Theme Button',
		theme: 'custom',
		customTheme: '/styles/custom-theme.css',
	},
	render: args => {
		return `<elx-button size="${args.size}" variant="${args.variant}" disabled="${args.disabled}" theme="${args.theme}" customTheme="${args.customTheme}">${args.text}</elx-button>`;
	},
};
