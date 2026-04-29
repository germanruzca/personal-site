import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background: ${theme.colors.accent};
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.border};
    border-radius: 3px;
  }

  code, pre {
    font-family: ${theme.fonts.mono};
  }

  pre {
    overflow-x: auto;
    padding: 1.5rem;
    border-radius: ${theme.borderRadius.md};
    background: #1a1a1a;
    color: #f8f8f2;
    font-size: 0.875rem;
    line-height: 1.7;
  }

  section {
    padding: ${theme.spacing['4xl']} 0;
  }
`;

export default GlobalStyles;
