import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel';
import { Container, HeaderIntro } from '../../globalStyles';
import { ContactUs } from './styles';

function Contact() {
  return (
    <div>
      <Container>
        <HeaderIntro>
          <h1>Fühlen Sie sich frei, uns zu erreichen</h1>
          <p>
            Wir freuen uns sehr, dass Sie sich die Zeit genommen haben, unsere
            Kontaktseite zu besuchen. Der einfachste Weg, mit uns in Kontakt zu
            treten, ist über WatsApp unter der unten angegebenen Nummer oder per
            E-Mail über unsere E-Mail-Adresse. Bitte geben Sie mit Ihrem Namen
            die Art der Dienstleistung an, die Sie erhalten möchten. Wir werden
            uns dann umgehend bei Ihnen melden.
          </p>
        </HeaderIntro>
        <ContactUs>
          <h2>Begleitung-Haushalshilfe.de</h2>
          <p>Jenaer Straße 7</p>
          <p>40880 Ratingen, DE</p>
          <p>begleitunghaushaltshilfe@gmail.com</p>
          <p>+49 171 4721 068</p>
        </ContactUs>
      </Container>
      <ServicesCarousel />
    </div>
  );
}

export default Contact;
