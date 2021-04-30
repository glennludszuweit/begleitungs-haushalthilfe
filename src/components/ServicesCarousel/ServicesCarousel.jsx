import Carousel from 'react-multi-carousel';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import { services } from '../../data';
import { responsive, CarouselContainer, CarouselContent } from './styles';

function ServicesCarousel() {
  return (
    <CarouselContainer>
      <Carousel responsive={responsive}>
        {services.map((service, index) => (
          <Link to={`/dienstleistungen/${slugify(service.name)}`} key={index}>
            <CarouselContent>
              <img src={service.image} alt={service.name} />
              <div>
                <h1>{service.name}</h1>
                {/* <p>{service.description}</p> */}
              </div>
            </CarouselContent>
          </Link>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default ServicesCarousel;
