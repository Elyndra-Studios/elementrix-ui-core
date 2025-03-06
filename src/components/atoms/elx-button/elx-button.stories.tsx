import { html } from 'lit-html';
import { applyDesignTokens } from '../../../utils/design-tokens/design-tokens';
import { defaultTokens } from '../../../../elementrix.config';

export default {
	title: 'Atoms/Button',
	component: 'elx-button',
	argTypes: {
		variant: { control: 'select', options: ['primary', 'secondary'], defaultValue: { summary: 'primary' }},
		size: { control: 'select', options: ['small', 'medium', 'large'], defaultValue: { summary: 'medium' }},
		radius: { control: 'select', options: ['small', 'medium', 'large'], defaultValue: { summary: 'medium' }},
		disabled: { control: 'boolean', defaultValue: { summary: false }}, // New control
	},
  args: {
    variant: 'primary',
    size: 'medium',
    radius: 'medium',
    disabled: false,
  },
	decorators: [
		story => {
			applyDesignTokens({
				colors: {
					...defaultTokens.colors
				},
			});
			return story();
		},
	],
};

const Template = args => html` <elx-button variant=${args.variant} size=${args.size} radius=${args.radius} ?disabled=${args.disabled}>Click Me</elx-button> `;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', size: 'medium', radius: 'medium', disabled: false };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', size: 'large', radius: 'large', disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { variant: 'primary', size: 'medium', radius: 'medium', disabled: true };
