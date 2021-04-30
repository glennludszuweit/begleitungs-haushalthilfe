import React from 'react';
import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel';
import { Container, HeaderIntro } from '../../globalStyles';

function Impressum() {
  return (
    <div>
      <Container>
        <HeaderIntro>
          <h1>Datenschutzerklärung</h1>
          <p>Wir sammeln keine Daten über Personen, die unsere Seiten lesen.</p>
          <p>
            Es ist unumgänglich, dass wir Kenntniss ueber Personen haben, die
            unsere Dienstleistungen in Anspruch nehmen. Wir haben nicht die
            gerigngste Intention, irgendwelche Informationen an Dritte
            weiterzugeben.
          </p>
          <h1>Impressum</h1>
          <p>Glenn Harry Ludszuweit</p>
          <p>begleitunghaushaltshilfe@gmail.com</p>
          <p>01714721068</p>
          <p>Jenaer Str. 7 40880</p>
          <p>Ratingen, DE</p>
        </HeaderIntro>
      </Container>
      <ServicesCarousel />
    </div>
  );
}

export default Impressum;
