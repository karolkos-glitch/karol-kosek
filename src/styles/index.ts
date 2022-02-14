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
    background: #333;
    color: #fefefe;
  }

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.8rem;
  }
`;

export const Root = styled.main`
  display: grid;

  @media (min-width: 768px) {
    height: 100vh;
    grid-template-areas: 
      "heading heading"
      "description projects"
  }
`