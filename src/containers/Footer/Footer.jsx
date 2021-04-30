import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { FooterContainer, FooterContent } from './styles';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <div>
            <h1>Begleitung-Haushaltshilfe</h1>
            <p>
              Alle Rechte vorbehalten &copy; {new Date().getFullYear()} <br />
              <Link to='/'>begleitung-haushalthilfe.de</Link>
            </p>
          </div>
          <div>
            <h3>Kontaktieren Sie uns</h3>
            <p>
              Jenaer Straße 7 <br />
              40880 Ratingen, DE
            </p>
            <p>begleitunghaushaltshilfe@gmail.com</p>
            <p>+49 171 4721 068</p>
          </div>
          <div>
            <h3>Sitemap</h3>
            <ul>
              <li>
                <Link to='/'>Startseite</Link>
              </li>
              <li>
                <Link to='/uber-uns'>Über uns</Link>
              </li>
              <li>
                <Link to='/dienstleistungen'>
                  Unsere Dienste und Hilfeleistungen
                </Link>
              </li>
              <li>
                <Link to='/kontakt'>Kontakt</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Begriffe und Zustimmung</h3>
            <ul>
              <li>
                <Link to='/impressum'>Datenschutz und Impressum</Link>
              </li>
            </ul>
          </div>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
