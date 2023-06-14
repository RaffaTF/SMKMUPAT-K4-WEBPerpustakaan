import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Kartu() {
  const b1 = useNavigate();
  const cardStyle = { width: '354px', height: '400px' };
  const imageStyle = { width: '100%', height: '70%' };

  return (
    <Container>
      <Row>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://2.bp.blogspot.com/-phuOf-0TW5o/XOUAiZJv7zI/AAAAAAAAG1k/Gk2D94glDn02lV18eYEE6YQI7V1ypCfWwCLcBGAs/s1600/Download%2BNovel%2BMariposa%2Bpdf%2BKarya%2BLuluk%2BHF.JPG"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>Mariposa</Card.Title>
              <Button onClick={() => b1('/baca')} className='bg-primary'>Baca</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/51e8gpQV4WL.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>War</Card.Title>
              <Button onClick={() => b1('/war')} className='bg-primary'>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71K2ywyk16L.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>Science Fiction</Card.Title>
              <Button onClick={() => b1('/sf')} className='bg-primary'>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://kbimages1-a.akamaihd.net/08bb082e-e9d4-492e-b2ae-ee04233dbc33/1200/1200/False/treasure-island-450.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>Adventure</Card.Title>
              <Button onClick={() => b1('/adventure')} className='bg-primary'>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/en/b/b9/Bird_Box_2014_book_cover.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>Horror</Card.Title>
              <Button onClick={() => b1('/horror')} className='bg-primary'>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/81m1s4wIPML.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>Fantasy</Card.Title>
              <Button onClick={() => b1('/fantasy')} className='bg-primary'>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>    
      <br/>
      <hr className="bg-dark" />
      <h3>Popular</h3>
      <Row>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/81+jKW2zSEL.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>The Spartans: An Epic History</Card.Title>
              <Card.Text>Oleh: Paul Anthony Cartledge</Card.Text>
              <Button className='bg-primary'>lebih lengkap</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>The Da Vinci Code</Card.Title>
              <Card.Text>Oleh: Dan Brown</Card.Text>
              <Button className='bg-primary'>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
              style={imageStyle}
            />
            <Card.Body style={{ height: '30%' }}>
              <Card.Title>The Lord of the Rings</Card.Title>
              <Card.Text>Oleh: J.R.R. Tolkien</Card.Text>
              <Button className='bg-primary'>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Kartu;