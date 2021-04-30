import styled from 'styled-components';

export const Member = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-around;
  margin-bottom: 10rem;

  & img {
    width: 100%;
    height: 60rem;
    margin: 2rem 0;
    object-fit: cover;
    object-position: top;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5rem;

    & img {
      height: 100%;
    }
  }
`;
