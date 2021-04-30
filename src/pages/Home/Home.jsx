import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { Header } from './styles';
import MetaTags from 'react-meta-tags';
import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel';

function Home() {
  return (
    <div>
      <MetaTags>
        <title>
          Begleitdienste, Besorgungen, Haushaltshilfe, Gebäudereinigung
        </title>
        <meta
          name='description'
          content='Wir bieten Unterstützung bei jeglicher Art von Besorgungen, sowie Haushaltshilfe und Begleitdienste für ältere Mitbürger im Raum Ratingen, Düsseldorf, Duisburg und Essen an. Bitte setzen Sie sich bei jeglicher Art von Bedarf mit uns in Verbindung.'
        />
      </MetaTags>
      <Container>
        <Header>
          {/* <img src={headerImg} alt='Welcome' /> */}
          <div>
            <h1>Herzlich Willkommen</h1>
            <p>
              Brauchen Sie Hilfe bei Besorgungen oder im Haushalt auf einer
              Ad-Hoc-Basis.
            </p>
            <p>
              Wir sind bereit für jede Art von Assistenz im Raum Ratingen (unser
              Sitz), Düsseldorf, Duisburg, Mühlheim, Essen.
            </p>
            <p>
              Unser Hilfsprogramm umfasst Begleitdienste für ältere Menschen,
              effiziente Haushaltsarbeiten zu wöchentlichen Terminen,
              Besorgungen, und Begleitung bei Arzt und Krankenhaus-Besuchen.
            </p>
            <p>
              Wir stellen männliche und weibliche Hilfskräfte zur Verfügung.
            </p>
            <p>
              Wenn Sie Bedarf fuer unsere Dienste haben, kontaktieren Sie uns
              bitte unter der Telefon-Nummer 01714721068 oder per Email unter
              der Addresse begleitunghaushaltshilfe@gmail.com
            </p>

            <div>
              <Link to='/dienstleistungen'>
                <button>Diensleistungen</button>
              </Link>
              <Link to='/kontakt'>
                <button>Kontakt</button>
              </Link>
            </div>
          </div>
        </Header>
      </Container>
      <ServicesCarousel />
    </div>
  );
}

export default Home;
