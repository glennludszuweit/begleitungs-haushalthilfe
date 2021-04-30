import styled from 'styled-components';

export const Content = styled.div`
  margin: 5rem 0 10rem;
  display: flex;
  justify-content: center;
  padding: 2rem;

  & img {
    width: 50rem;
  }

  & div {
    padding: 2rem;

    & h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    & p {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 0 5rem;

    & img {
      width: 100%;
    }
  }
`;
