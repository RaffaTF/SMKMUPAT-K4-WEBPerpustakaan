import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Kartu() {
  const b1 = useNavigate()
  return (
     <Container>
      <h3>Rekomendasi</h3>
      <Row>
      <Col xs={3} style={{ paddingRight: '0.5rem' }}>
          <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://www.dictio.id/uploads/db3342/original/3X/4/0/4073ee47e814ca95dd12cb5cc3bf49a0ada303d5.jpeg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>Sejarah</Card.Title>
              <Card.Text> </Card.Text>
              <Button onClick={() => b1 ('/edukasi')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT12a-QMxQG7RunPWOX9PIZ_MdrQy28c2QH_Q&usqp=CAU"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>Cerita Rakyat</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => b1 ('/war')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/71K2ywyk16L.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>Science Fiction</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => b1 ('/sf')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://storage.nu.or.id/storage/post/16_9/mid/1631847924.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>Agama</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => b1 ('/agama')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col xs={3} style={{ paddingRight: '0.5rem' }}>
      <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://kbimages1-a.akamaihd.net/08bb082e-e9d4-492e-b2ae-ee04233dbc33/1200/1200/False/treasure-island-450.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>Adventure</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => b1 ('/advanture')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/en/b/b9/Bird_Box_2014_book_cover.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>Horror</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => b1 ('/horor')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/81m1s4wIPML.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body style={{ height: '210px'}}>
              <Card.Title>Fantasy</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => b1 ('/fantasy')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card style={{ width: '17rem' , height: '22rem'}}>
            <Card.Img
          variant="top"
          src="https://cdn.idntimes.com/content-images/duniaku/post/20220510/fox-5732b61ea6d9afd7d7aee7e3a76b9ff4.jpg"
          style={{ width: '17rem', height: '40rem' }} />
            <Card.Body style={{ height: '210px'}}>
              <Card.Title>Action</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => b1 ('/action')} className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>     
      <br/>
      <hr className="bg-dark" />
      <h3>Popular</h3>
      <Row>
      <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/81+jKW2zSEL.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>The Spartans </Card.Title>
              <Card.Text></Card.Text>
              <Button className='bg-primary '>lebih lengkap</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>The Da Vinci Code</Card.Title>
              <Card.Text></Card.Text>
              <Button className='bg-primary '>lebih lengkap</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>The Lord of the Rings </Card.Title>
              <Card.Text></Card.Text>
              <Button className='bg-primary '>lebih lengkap</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} style={{ paddingRight: '0.5rem' }}>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
          style={{ width: '17rem', height: '15rem' }} />
            <Card.Body>
              <Card.Title>The Lord of the Rings </Card.Title>
              <Card.Text></Card.Text>
              <Button className='bg-primary '>lebih lengkap</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> 
      <br/>
    </Container>
    
  
    
  );
}

export default Kartu;