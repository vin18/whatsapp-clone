import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  * > .MuiSvgIcon-root {
    font-size: 2.4rem !important;

  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    background-color: #dadbd3;
    height: 100vh;
    display: grid;
    place-items: center;
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  }
`;
