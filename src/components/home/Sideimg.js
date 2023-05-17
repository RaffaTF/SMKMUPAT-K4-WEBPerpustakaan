import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Gambr() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://s1.dmcdn.net/v/U8oQI1Z3uMM8LThsu/x1080"
          alt="First slide"
          style={{ width: '500px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://onlinelearning.unj.ac.id/pluginfile.php/2884/course/overviewfiles/S2%20Baru-01.jpg"
          alt="Second slide"
          style={{ width: '500px', height: '400px' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://statik.tempo.co/data/2013/11/13/id_236822/236822_620.jpg"
          alt="Third slide"
          style={{ width: '500px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Memberi Dislike</h3>
          <p>
            Yo ndak tau tanya yang kok tanya sayaa
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gambr;