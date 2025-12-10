import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';

const meta: Meta = {
	title: 'Molecules/el-accordion',

	argTypes: {
		multiple: { control: 'boolean' },
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	args: {
		multiple: true,
	},
	render: args => html`
		<el-accordion ?multiple="${args.multiple}">
			<el-accordion-item heading="Section 1" ?open="${true}">
				<p>Content for section 1. This section is open by default.</p>
			</el-accordion-item>
			<el-accordion-item heading="Section 2">
				<p>Content for section 2. Click to expand.</p>
			</el-accordion-item>
			<el-accordion-item heading="Section 3">
				<p>Content for section 3. Click to expand.</p>
			</el-accordion-item>
		</el-accordion>
	`,
};

export const Multiple: Story = {
	args: {
		multiple: true,
	},
	render: args => html`
		<el-accordion ?multiple="${args.multiple}">
			<el-accordion-item heading="First Section" ?open="${true}">
				<p>Multiple sections can be open at once.</p>
			</el-accordion-item>
			<el-accordion-item heading="Second Section" ?open="${true}">
				<p>This section is also open.</p>
			</el-accordion-item>
			<el-accordion-item heading="Third Section">
				<p>Click to expand this one too.</p>
			</el-accordion-item>
		</el-accordion>
	`,
};
