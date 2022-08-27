import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }

  body {
    background: #191919;
    height: 100vh;
    color: #fff;
  }
`;
