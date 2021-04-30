import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 0 0 10rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 35rem;
  margin: 2rem;
  flex-grow: 1;

  & img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }

  & div {
    padding: 2rem 0;

    & h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    & p {
      font-size: 1.75rem;
    }
  }
`;
