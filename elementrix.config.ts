export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    text: string;
  };
  typography: {
    fontFamily: string;
    fontSize: string;
  };
  radius: {
    small: string;
    medium: string;
    large: string;
  };
}

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

export const getDesignTokens = (customTokens?: Partial<DesignTokens>): DesignTokens => {
  return {
    ...defaultTokens,
    ...customTokens,
  };
};
