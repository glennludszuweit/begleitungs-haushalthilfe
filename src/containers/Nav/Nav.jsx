import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, MobileNavButton, NavMenu, MobileMenu } from './styles';

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  return (
    <NavContainer>
      <h1>Begleitung-Haushaltshilfe.de</h1>
      <NavMenu>
        <li>
          <Link to='/'>Startseite</Link>
        </li>
        <li>
          <Link to='/uber-uns'>Über uns</Link>
        </li>
        <li>
          <Link to='/dienstleistungen'>Unsere Dienste und Hilfeleistungen</Link>
        </li>
        <li>
          <Link to='/kontakt'>Kontakt</Link>
        </li>
      </NavMenu>

      <MobileNavButton onClick={() => setOpenMenu(!openMenu)} />
      {openMenu && (
        <MobileMenu>
          <li onClick={closeMenu}>
            <Link to='/'>Startseite</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/uber-uns'>Über uns</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/dienstleistungen'>Dienstleistungen</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to='/kontakt'>Kontakt</Link>
          </li>
        </MobileMenu>
      )}
    </NavContainer>
  );
}

export default Nav;
