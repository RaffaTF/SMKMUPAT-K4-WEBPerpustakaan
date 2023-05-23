import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';


const No3 = () => {
  const b1 = useNavigate()
  
  return (
    <div className='bg-dark'>
       <img 
        src='https://img.freepik.com/free-photo/science-fiction-scene_456031-99.jpg?w=2000'
        alt='Horor'
        style={{width: '1300px' , height:'300px'}}
        />
        <h2 className='text-white'>Science Fiction</h2>
        <hr className='warning'/>
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
              <Button onClick={() => b1 ('/edukasi')} className='bg-primary '>lebih</Button>
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
              <Button variant="primary" className=' hover-button '>lebih</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
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
              <Button className='bg-primary '>Baca</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>     
      <br/>
      <hr className="bg-dark" />
     
    </Container>
    
    <Pagination className='text-center bg-white' defaultCurrent={1} total={500} theme='dark' />
    </div>
  );
}

export default No3;