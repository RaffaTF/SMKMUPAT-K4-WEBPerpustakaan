import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';


const No8 = () => {
  const b1 = useNavigate()
  
  return (
    <div className='bg-dark'>
        <img 
        src='https://content.shopback.com/id/wp-content/uploads/2019/03/18145846/Film-Action-Terbaik-Sepanjang-Masa.jpg'
        alt='Horor'
        style={{width: '100%' , height:'300px'}}
        />
        <h2 className='text-white'>Action</h2>
        <hr className='warning'/>
        <Container>
       
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
                <Button onClick={() => b1 ('/start')} className='bg-primary '>lebih</Button>
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
        <hr className="bg-dark" />
       
      </Container>
    
    <Pagination className='text-center bg-white' defaultCurrent={1} total={500} theme='dark' />
    </div>
  );
}

export default No8;