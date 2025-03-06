import { html } from 'lit-html';
import { applyDesignTokens } from '../../../utils/design-tokens/design-tokens';
import { defaultTokens } from '../../../../elementrix.config';

export default {
  title: 'Atoms/Button',
  component: 'elx-button',
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    radius: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' }, // New control
  },
  decorators: [
    (story) => {
      applyDesignTokens({
        colors: {
          ...defaultTokens.colors,
          primary: '#00a8e8',
          secondary: '#6b7280',
        },
      });
      return story();
    },
  ],
};

const Template = (args) => html`
  <elx-button
    variant=${args.variant}
    size=${args.size}
    radius=${args.radius}
    ?disabled=${args.disabled}
  >Click Me</elx-button>
`;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', size: 'medium', radius: 'medium', disabled: false };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', size: 'large', radius: 'large', disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { variant: 'primary', size: 'medium', radius: 'medium', disabled: true };
