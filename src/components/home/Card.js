import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
function Kartu() {
  return (
     <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img
          variant="top"
          src="https://deepublishstore.com/wp-content/uploads/2021/02/Matematika-Diskret-Teknik_Seng-Hansun-Convert-2-scaled.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>Matematika,Bahasa,DLL</Card.Text>
              <Button className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/51e8gpQV4WL.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>War</Card.Title>
              <Card.Text>The Last War</Card.Text>
              <Button className='bg-primary '>lebih</Button>
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
              <Card.Text>Red Mars</Card.Text>
              <Button className='bg-primary '>lebih</Button>
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
              <Card.Text>Treasure Island</Card.Text>
              <Button className='bg-primary '>lebih</Button>
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
              <Card.Text>Bird Box</Card.Text>
              <Button className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/81m1s4wIPML.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Fantasy</Card.Title>
              <Card.Text>Harry Potter</Card.Text>
              <Button className='bg-primary '>lebih</Button>
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdo0FiuJtKd76mPHqQyo0HBLFQnfFSoeenxBmmNhPCBITy8n4PflPYTfQjofVwKD8iJEc&usqp=CAU"
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
      <Row>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://kbimages1-a.akamaihd.net/08bb082e-e9d4-492e-b2ae-ee04233dbc33/1200/1200/False/treasure-island-450.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>Advanture</Card.Title>
              <Card.Text>Treasure Island</Card.Text>
              <Button className='bg-primary '>lebih</Button>
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
              <Card.Text>Bird Box</Card.Text>
              <Button className='bg-primary '>lebih</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img
          variant="top"
          src="https://a.cdn-myedisi.com/book/cover/bse-a_596f09f7e75d7203700660.jpg"
          style={{ width: '354px', height: '350px' }} />
            <Card.Body>
              <Card.Title>ips</Card.Title>
              <Card.Text>kelas 5</Card.Text>
              <Button className='bg-primary 'link to="/store">lebih</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>     
      <br/>
    </Container>
    
  
    
  );
}

export default Kartu;