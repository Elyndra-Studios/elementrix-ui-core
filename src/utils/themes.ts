export function applyTheme(theme: 'light' | 'dark' | 'custom', lightTheme: string = '../styles/default-light.css', darkTheme: string = '../styles/default-dark.css', customTheme: string | null = null) {
  document.documentElement.setAttribute('data-theme', theme);

  let themeUrl = '';

  if (theme === 'light') {
    themeUrl = lightTheme;
  } else if (theme === 'dark') {
    themeUrl = darkTheme;
  } else if (theme === 'custom') {
    if (!customTheme) {
      console.warn('Custom theme is set, but no stylesheet was provided. Defaulting to light theme.');
      themeUrl = lightTheme;
    } else {
      themeUrl = customTheme;
    }
  }

  if (!themeUrl) {
    throw new Error(`No stylesheet provided for ${theme} theme, and no fallback available.`);
  }

  let existingLink = document.getElementById('elementrix-theme') as HTMLLinkElement | null;
  if (!existingLink) {
    existingLink = document.createElement('link') as HTMLLinkElement;
    existingLink.id = 'elementrix-theme';
    existingLink.rel = 'stylesheet';
    document.head.appendChild(existingLink);
  }
  existingLink.href = themeUrl;
}
