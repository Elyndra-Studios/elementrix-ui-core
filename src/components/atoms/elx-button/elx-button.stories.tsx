import { html } from 'lit-html';
import { applyDesignTokens } from '../../../utils/design-tokens/design-tokens';
import { defaultTokens } from '../../../../elementrix.config';

export default {
  title: 'Components/Button',
  component: 'elx-button',
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    radius: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

const Template = (args) => {
  applyDesignTokens({
    colors: {
      ...defaultTokens.colors,
      primary: '#ff5733',
      secondary: '#28a745',
    },
  });
  return html`<elx-button variant=${args.variant} size=${args.size} radius=${args.radius}>Click Me</elx-button>`;
};

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', size: 'medium', radius: 'medium' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', size: 'large', radius: 'large' };
