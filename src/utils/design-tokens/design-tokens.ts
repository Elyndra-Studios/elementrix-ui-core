import { DesignTokens } from '../../../elementrix.config';

// Define default tokens here (moved from elementrix.config.ts)
export const defaultTokens: DesignTokens = {
	colors: {
		primary: '#00a8e8',
		secondary: '#6b7280',
		text: '#1f2937',
	},
	typography: {
		fontFamily: "'Inter', sans-serif",
		fontSize: '18px',
	},
	radius: {
		small: '6px',
		medium: '12px',
		large: '18px',
	},
};

// Merge custom tokens with defaults
export const getDesignTokens = (customTokens?: Partial<DesignTokens>): DesignTokens => {
	return {
		...defaultTokens,
		...customTokens,
	};
};

// Convert tokens to CSS variables
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

// Apply tokens to the document
export const applyDesignTokens = (customTokens?: Partial<DesignTokens>) => {
	const tokens = getDesignTokens(customTokens);
	const styleSheet = document.createElement('style');
	styleSheet.innerHTML = generateScssVariables(tokens);
	document.head.appendChild(styleSheet);
};

// Auto-apply default tokens on import
if (typeof window !== 'undefined') {
	applyDesignTokens();
}
