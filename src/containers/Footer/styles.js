import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #463f3a;
  color: #fff;
  padding: 5rem 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;

  & * {
    color: #fff;
  }

  & div {
    padding: 2rem;

    & h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    & h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    & p {
      font-size: 1.25rem;
      line-height: 2rem;

      & a {
        font-size: 1.25rem;
      }
    }

    & ul {
      list-style: none;

      & li {
        margin: 0.2rem 0;

        & a {
          font-size: 1.25rem;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
