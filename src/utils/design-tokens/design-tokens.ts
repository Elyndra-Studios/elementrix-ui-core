import { DesignTokens, getDesignTokens } from '../../../elementrix.config';

// Convert design tokens to SCSS variable string
export const generateScssVariables = (tokens: DesignTokens): string => {
  const { colors, typography, radius } = tokens;
  return `
    :root {
      --elx-color-primary: ${colors.primary};
      --elx-color-secondary: ${colors.secondary};
      --elx-color-text: ${colors.text};
      --elx-font-family: ${typography.fontFamily};
      --elx-font-size: ${typography.fontSize};
      --elx-radius-small: ${radius.small};
      --elx-radius-medium: ${radius.medium};
      --elx-radius-large: ${radius.large};
    }
  `;
};

// Utility to inject tokens into the document (optional for runtime theming)
export const applyDesignTokens = (customTokens?: Partial<DesignTokens>) => {
  const tokens = getDesignTokens(customTokens);
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = generateScssVariables(tokens);
  document.head.appendChild(styleSheet);
};
