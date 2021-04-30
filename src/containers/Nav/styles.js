import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';

export const NavContainer = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f3ee;
  padding: 3rem 2rem;

  & h1 {
    font-size: 3rem;

    @media screen and (max-width: 425px) {
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 425px) {
    padding: 1.5rem;
  }
`;

export const MobileNavButton = styled(BiMenu)`
  font-size: 3rem;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  & li {
    margin-left: 2rem;

    & a {
      font-size: 2rem;
      text-decoration: none;
      color: inherit;

      &:hover {
        transition: 0.3s;
        color: #e0afa0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 7.5rem;
  list-style: none;
  padding: 2rem 4rem;
  background: #e8e8e8;
  display: none;
  z-index: 100;

  & li {
    margin: 2rem 0;

    & a {
      font-size: 2rem;
      text-decoration: none;
      color: inherit;

      &:hover {
        transition: 0.3s;
        color: #e0afa0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 425px) {
    top: 6rem;
  }
`;
