import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  body{
    position: relative;
    height: 100vh;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: normal;
  }
  body div{
    height:100%;
  }
`;
