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
    font-family: Lato;
    background: #fefefe;
    color: #333;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.8rem;
  }
`;

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`