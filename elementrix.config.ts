// Core configuration with default design tokens for Elementrix-UI
export interface DesignTokens {
  colors: {
    primary: string;   // Vibrant, energetic color for main actions
    secondary: string; // Subtle, complementary color for accents
    text: string;      // Dark, readable base text color
  };
  typography: {
    fontFamily: string; // Modern, geometric sans-serif
    fontSize: string;   // Base size for accessibility and boldness
  };
  radius: {
    small: string;  // Subtle rounding for small elements
    medium: string; // Default rounding for buttons, cards, etc.
    large: string;  // Generous rounding for standout UI pieces
  };
}

export const defaultTokens: DesignTokens = {
  colors: {
    primary: '#00a8e8',   // Electric cyan-blue for a tech-forward, lively feel
    secondary: '#6b7280', // Cool gray for balance and sophistication
    text: '#1f2937',      // Dark gray-blue for modern readability
  },
  typography: {
    fontFamily: "'Inter', sans-serif", // Clean, modern, and open-source
    fontSize: '18px',                  // Slightly larger for a bold statement
  },
  radius: {
    small: '6px',   // Softer than 4px, still subtle
    medium: '12px', // Comfortably rounded default
    large: '18px',  // Bold and approachable for larger elements
  },
};

// Function to allow custom token overrides
export const getDesignTokens = (customTokens?: Partial<DesignTokens>): DesignTokens => {
  return {
    ...defaultTokens,
    ...customTokens,
  };
};
