import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import { services } from '../../data';
import { Container, HeaderIntro } from '../../globalStyles';
import { CardContainer, Card } from './styles';

function Services() {
  return (
    <Container>
      <HeaderIntro>
        <h1>Unsere Dienste und Hilfeleistungen</h1>
        <p>
          Wir sind Ihr Mädchen-für-alles. Wir übernehmen jede Art von
          Dienstleistungen... auch solche, für die Sie möglicherweise nicht so
          leicht jemenaden anders finden.
        </p>
        <p>
          Aus diesem Grund spezifizieren wir unser Angebot nicht sonderlich.
        </p>
        <p>Wir können aber einige Beispiele nennen.</p>
        <p>
          Zu diesen Covid-Zeiten ist es für ältere Mitbürger oftmals nicht
          ratsam, ausser Haus zu gehen. Viele Unternehmen sind aber trotzdem
          nicht darauf vorbereitet, schnell und ökonomisch Waren an die Haustür
          zu liefern. Wir sind nicht wählerisch und übernehmen jede
          Liefertätigkeit, für die ein PKW ausreichend ist.
        </p>
        <p>
          Wir sind ausserdem bereit, Aufräumarbeiten im Haushalt oder jeglichert
          Art von Wohnsitz zu übernehmen.
        </p>
        <p>
          Andere Dienste, für die wir bereit sind, umfassen einfaches
          Gesellschaft leisten oder das Ausführen von Haustieren.
        </p>
        <p>
          Unsere Preise für jegliche Art von Dienstleistungen sind nicht
          festgesetzt. Für sehr leichte Aufgaben würden wir weniger berechnen
          als für Jobs, die eher unangenehm sind.
        </p>
        <p>
          So oder so, bitte wenden Sie sich an uns per Telefon, Whatsapp, oder
          Email, und besprechen Sie mit uns, was Ihr Anliegen wäre.
        </p>
      </HeaderIntro>
      <CardContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <Link to={`/dienstleistungen/${slugify(service.name)}`}>
              <img src={service.image} alt={service.name} />
              <div>
                <h3>{service.name}</h3>
                {/* <p>{service.description}</p> */}
              </div>
            </Link>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Services;
