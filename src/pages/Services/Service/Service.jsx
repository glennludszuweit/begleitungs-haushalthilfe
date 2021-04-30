import { useParams } from 'react-router';
import slugify from 'react-slugify';
import { services } from '../../../data';
import ServicesCarousel from '../../../components/ServicesCarousel/ServicesCarousel';
import { Container, HeaderIntro } from '../../../globalStyles';
import { Content } from './styles';

function Service() {
  const { name } = useParams();
  const service = services.filter((item) => slugify(item.name) === name);

  return (
    <div>
      <Container>
        <HeaderIntro>
          <p>
            Der einfachste Weg, mit uns in Kontakt zu treten, ist über WatsApp
            unter der Nummer +49 171 4721 068 oder per E-Mail über
            begleitunghaushaltshilfe@gmail.com. Bitte geben Sie mit Ihrem Namen
            die Art der Dienstleistung an, die Sie erhalten möchten.
          </p>
        </HeaderIntro>

        {service.map((el, index) => (
          <Content key={index}>
            <img src={el.image} alt={el.name} />
            <div>
              <h1>{el.name}</h1>
              <p>{el.description}</p>
            </div>
          </Content>
        ))}
      </Container>
      <ServicesCarousel />
    </div>
  );
}

export default Service;
