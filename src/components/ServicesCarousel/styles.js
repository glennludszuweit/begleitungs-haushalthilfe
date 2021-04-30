import styled from 'styled-components';

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CarouselContainer = styled.div`
  padding: 5rem 0;
  background: #bcb8b1;
`;

export const CarouselContent = styled.div`
  margin: 2rem;
  box-shadow: 0 0 0.5rem #fff;
  background: #fff;

  & img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    object-position: top;
  }

  & div {
    padding: 2rem;

    & h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    & p {
      font-size: 1.75rem;
    }
  }
`;
