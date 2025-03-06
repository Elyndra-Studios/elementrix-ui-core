import { generateScssVariables, applyDesignTokens } from './design-tokens';
import { defaultTokens } from '../../../elementrix.config';

describe('design-tokens utility', () => {
  it('generates SCSS variables from default tokens', () => {
    const result = generateScssVariables(defaultTokens);
    expect(result).toContain('--elx-color-primary: #007bff');
    expect(result).toContain('--elx-font-family: \'Helvetica\', sans-serif');
    expect(result).toContain('--elx-radius-medium: 8px');
  });

  it('overrides tokens when custom values are provided', () => {
    const customTokens = {
      colors: {
        ...defaultTokens.colors, // Spread to include secondary and text
        primary: '#ff0000',      // Override only primary
      },
    };
    const result = generateScssVariables({ ...defaultTokens, ...customTokens });
    expect(result).toContain('--elx-color-primary: #ff0000');
    expect(result).toContain('--elx-color-secondary: #6c757d'); // Unchanged
  });

  it('applies tokens to the document', () => {
    const customTokens = {
      colors: {
        ...defaultTokens.colors, // Spread to include secondary and text
        primary: '#123456',      // Override only primary
      },
    };
    applyDesignTokens(customTokens);
    const styleElement = document.head.querySelector('style');
    expect(styleElement?.innerHTML).toContain('--elx-color-primary: #123456');
  });
});
