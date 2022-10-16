import slide01 from '../static/slide01.jpg'
import slide02 from '../static/slide02.jpg'
import slide03 from '../static/slide03.jpg'

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide01}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide03}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;