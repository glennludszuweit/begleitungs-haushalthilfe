import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel';
import ownerOneImg from '../../images/about/test-owner.jpg';
import ownerTwoImg from '../../images/about/test-owner-2.jpg';
import { Container, HeaderIntro } from '../../globalStyles';
import { Member } from './styles';

function About() {
  return (
    <div>
      <Container>
        <HeaderIntro>
          <h1>Über uns</h1>
          <p>Wir sind Harry und Anamor Ludszuweit.</p>
          <p>
            Wir haben jahrelange Erfahrung in Unternehmen, die sich auf
            Dienstleistungen hauptsächlich für altere Mitbürger konzentrieren.
          </p>
          <p>
            Wir haben uns nun entschlossen, unsere Hilfe direkt anzubieten
            anstatt dies über verschiedene Agenturen zu tun.
          </p>
          <p>
            Bitte beachten Sie, dass wir keine medizinische Betreuung übernehmen
            können. Dazu sind wir nicht qualifiziert.
          </p>
          <p>
            Andererseits, viele ältere oder behinderte Mitbürger brauchen nicht
            nur medizinische Betreuung (die oft sowieso unter Zeitdruck steht),
            sondern Hilfeleistungen bei ganz gewöhnlichen Problemen, wie
            Aufräumarbeiten im Haushalt oder für Besorgungen ausser Haus.
          </p>
          <p>Wir sind auch dazu bereit, einfach nur Gesellschaft zu leisten.</p>
          <p>
            Während wir unsere Dienste natuerlich als Gewerbe- oder
            Berufsausübung anbieten (auch wir müssen Geld verdienen), passen wir
            die Beträge, die wir berechnen, den Umständen, und unterscheiden
            zwischen einfachen und eher umständlichen Anforderungen.
          </p>
        </HeaderIntro>
        <Member>
          <img src={ownerOneImg} alt='Harry Ludszuweit' />
          <img src={ownerTwoImg} alt='Anamor Ludszuweit' />
        </Member>
      </Container>
      <ServicesCarousel />
    </div>
  );
}

export default About;
