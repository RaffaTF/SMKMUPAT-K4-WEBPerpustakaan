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
          src="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-the-background-photography-of-the-empty-library-bookstore-indoors-image_785539.jpg"
          alt="Third slide"
          style={{ width: '500px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Terdapat bermacam buku</h3>
          <p>Didalam Buku</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgBfLj2zFIhrRjQ8IawAGY1Q5fTwfpFXMsddqCKDmCPa4GR0r6U6IKzXuNI9vbHPs1hdCOvyWBRUE1T4U03eL3ZrThHE4IgF5Uv0y38S-N2cSe5VBq53w6hw6lBXy2nL1_mLl_BcRvX0tgTokbn_AV8o4AXRBXcanRxfCZO_1eCpfXcvJiluKKUIdxNg/s1191/791s.jpg"
          alt="Third slide"
          style={{ width: '500px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>BACA DULU GAK SIH😂</h3>
          <p>mamah aku pintar membaca</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gambr;