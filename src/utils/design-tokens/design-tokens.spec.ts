import { generateScssVariables, applyDesignTokens } from './design-tokens';
import { defaultTokens } from '../../../elementrix.config';

describe('design-tokens utility', () => {
  it('generates SCSS variables from default tokens', () => {
    const result = generateScssVariables(defaultTokens);
    expect(result).toContain('--elx-color-primary: #00a8e8'); // Updated
    expect(result).toContain('--elx-font-family: \'Inter\', sans-serif'); // Updated
    expect(result).toContain('--elx-radius-medium: 12px'); // Updated
  });

  it('overrides tokens when custom values are provided', () => {
    const customTokens = {
      colors: {
        ...defaultTokens.colors,
        primary: '#ff0000',
      },
    };
    const result = generateScssVariables({ ...defaultTokens, ...customTokens });
    expect(result).toContain('--elx-color-primary: #ff0000');
    expect(result).toContain('--elx-color-secondary: #6b7280'); // Updated
  });

  it('applies tokens to the document', () => {
    const customTokens = {
      colors: {
        ...defaultTokens.colors,
        primary: '#123456',
      },
    };
    applyDesignTokens(customTokens);
    const styleElement = document.head.querySelector('style');
    expect(styleElement?.innerHTML).toContain('--elx-color-primary: #123456');
  });
});
