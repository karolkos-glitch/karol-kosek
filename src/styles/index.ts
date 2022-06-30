import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style-type: none;
  }

  body {
    font-family: helvetica;
    background: #000;
    color: #fff;
  }
`;

export const Root = styled.main`
  max-width: 80vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
`