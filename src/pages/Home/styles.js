import styled from 'styled-components';

export const Header = styled.div`
  display: flex;

  & img {
    width: 50rem;
    object-fit: cover;
  }

  & div {
    padding: 5rem;

    & h1 {
      font-size: 5rem;
      margin-bottom: 3rem;
    }

    & p {
      font-size: 2rem;
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    & div {
      padding: 0;
      margin: 5rem 0;

      & button {
        padding: 1rem 3rem;
        font-size: 2rem;
        margin: 1rem 1rem 1rem 0;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    & img {
      transform: rotate(90deg);
      /* margin: 0 auto; */
      margin: -25rem auto;
      width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    & img {
      margin: -5rem auto -10rem;
    }

    & div {
      padding: 2rem;

      & h1 {
        font-size: 3rem;
      }
    }
  }
`;
