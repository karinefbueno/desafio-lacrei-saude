import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


  :root {
    --font-family: 'Nunito', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  body {
    background-color: rgba(0, 255, 102, 0.2);
    min-width: 360px;
    height: 100%;
    width: 100%;
  }

  button {
    font-weight: 700;
    font-size: 18px;
    height: 48px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;
