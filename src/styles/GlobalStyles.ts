import { createGlobalStyle } from 'styled-components';
import { media } from './breakpoints';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #000;
    --terminal-green: #33ff33;
    --terminal-glow: rgba(51, 255, 51, 0.4);
    --terminal-font: 'Courier New', Courier, monospace;
  }

  @keyframes phosphorGlow {
    0% { text-shadow: 0 0 5px var(--terminal-glow); }
    50% { text-shadow: 0 0 15px var(--terminal-glow), 0 0 20px var(--terminal-glow); }
    100% { text-shadow: 0 0 5px var(--terminal-glow); }
  }

  @keyframes scanlineMove {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background-color: var(--bg-color);
    color: var(--terminal-green);
    font-family: var(--terminal-font);
    overflow-x: hidden;
  }

  body {
    /* Fluid typography: font-size changes between 14px and 18px */
    font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--terminal-green);
  }

  /* Touch helper */
  button, a {
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  ${media.mobile} {
    body {
      overflow-y: auto; /* Allow scrolling on mobile if content overflows vertical stack */
    }
  }
`;
