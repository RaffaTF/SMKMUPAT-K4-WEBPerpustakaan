import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Kartu() {
  const b1 = useNavigate()
  return (
     <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img
          variant="top"
          src="https://www.dictio.id/uploads/db3342/original/3X/4/0/4073ee47e814ca95dd12cb5cc3bf49a0ada303d5.jpeg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Sejarah</Card.Title>
              <Card.Text> Cerita sejarah adalah peristiwa yang benar-benar pernah terjadi atau berlangsung di masa lalu</Card.Text>
              <Button onClick={() => b1 ('/edukasi')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://p4.wallpaperbetter.com/wallpaper/124/532/2/summer-fog-woman-home-wallpaper-preview.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Cerita Rakyat</Card.Title>
              <Card.Text>Cerita rakyat adalah cerita yang diwariskan dari generasi ke generasi dalam suatu budaya atau masyarakat tertentu</Card.Text>
              <Button onClick={() => b1 ('/war')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/71K2ywyk16L.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Science Fiction</Card.Title>
              <Card.Text>adalah cerita-cerita spekulatif yang berhubungan dengan ilmu pengetahuan, teknologi, atau konsep-konsep futuristik.</Card.Text>
              <Button onClick={() => b1 ('/sf')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://kbimages1-a.akamaihd.net/08bb082e-e9d4-492e-b2ae-ee04233dbc33/1200/1200/False/treasure-island-450.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Advanture</Card.Title>
              <Card.Text>Cerita adventure adalah tentang perjalanan atau pengalaman yang menarik dan penuh dengan tantangan, petualangan, dan eksploras</Card.Text>
              <Button onClick={() => b1 ('/advanture')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/en/b/b9/Bird_Box_2014_book_cover.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Horror</Card.Title>
              <Card.Text>Cerita horor ini melibatkan unsur rumah tua yang angker, penemuan objek terlarang, dan hadirnya entitas jahat yang mengancam keselamatan tokoh utama.</Card.Text>
              <Button onClick={() => b1 ('/horor')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/81m1s4wIPML.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body style={{ height: '210px'}}>
              <Card.Title>Fantasy</Card.Title>
              <Card.Text>Cerita fantasy menceritakan tentang dunia atau pengalaman yang melibatkan unsur-unsur yang tidak lazim atau magis.</Card.Text>
              <Button onClick={() => b1 ('/fantasy')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>     
      <br/>
      <hr className="bg-dark" />
      <h3>Popular</h3>
      <Row>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/81+jKW2zSEL.jpg"
          style={{ width: '354px', height: '450px' }} />
            <Card.Body>
              <Card.Title>The Spartans: An Epic History </Card.Title>
              <Card.Text>Oleh: Paul Anthony Cartledge</Card.Text>
              <Button className='bg-primary '>lebih lengkap</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg"
          style={{ width: '354px', height: '450px' }} />
            <Card.Body>
              <Card.Title>The Da Vinci Code</Card.Title>
              <Card.Text>Oleh: Dan Brown</Card.Text>
              <Button className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
          style={{ width: '354px', height: '450px' }} />
            <Card.Body>
              <Card.Title>The Lord of the Rings </Card.Title>
              <Card.Text>Oleh: J.R.R. Tolkien</Card.Text>
              <Button className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> 
    </Container>
    
  
    
  );
}

export default Kartu;