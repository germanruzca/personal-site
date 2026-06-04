export const theme = {
  colors: {
    background: '#F4F4F0',
    text: '#0D0D0D',
    accent: '#F07830',
    accentPurple: '#F5A623',
    darkBg: '#111111',
    darkText: '#F4F4F0',
    muted: '#6B6B6B',
    border: '#E0E0DA',
    cardBg: '#FFFFFF',
    tagBg: '#EEEEE8',
  },
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'Fira Code', 'Cascadia Code', monospace",
  },
  fontSizes: {
    xs: 'clamp(0.7rem, 1.5vw, 0.75rem)',
    sm: 'clamp(0.85rem, 2vw, 0.9rem)',
    base: 'clamp(0.95rem, 2.5vw, 1rem)',
    md: 'clamp(1rem, 3vw, 1.125rem)',
    lg: 'clamp(1.1rem, 3.5vw, 1.25rem)',
    xl: 'clamp(1.25rem, 4vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 5vw, 2rem)',
    '3xl': 'clamp(2rem, 6vw, 2.75rem)',
    '4xl': 'clamp(2.5rem, 8vw, 3.75rem)',
    '5xl': 'clamp(3rem, 10vw, 5rem)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  transitions: {
    fast: '0.15s ease',
    base: '0.25s ease',
    slow: '0.4s ease',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 4px 12px rgba(0,0,0,0.08)',
    lg: '0 8px 24px rgba(0,0,0,0.10)',
    xl: '0 16px 40px rgba(0,0,0,0.12)',
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
  },
};

export const media = {
  xs: '@media (max-width: 480px)',
  sm: '@media (max-width: 768px)',
  md: '@media (max-width: 1024px)',
  lg: '@media (max-width: 1280px)',
};

export type Theme = typeof theme;
