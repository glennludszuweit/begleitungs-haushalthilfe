import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Lato', sans-serif;
    color: #463f3a;
    word-break: break-word;

    & a {
      text-decoration: none
    }
  }

  /* & .react-pdf__Page__canvas {
      width: 100% !important;
      height: 100% !important;
  } */
  
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  overflow: hidden;
`;

export const HeaderIntro = styled.div`
  padding: 5rem 2rem;

  & h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 2rem;
    line-height: 3rem;
    margin: 2rem 0;
  }
`;
