import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Sebelumbaca() {
    const b1 = useNavigate()

  return (
    <Container>
      <Row>
      <Col xs={3} sm={3}><h3>The Da Vinci Code</h3>
      <Card>
         <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg"
          style={{height: '300px'}}/></Card>
      </Col>
      <Col xs={9} sm={9} style={{ marginTop: '90px' }}>
      <Table striped style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody >
        <tr style={{ border: '3px solid lightblue',borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '3px solid lightblue' , borderColor: 'lightblue'  }}>
          <th >Ditulis</th>
          <td>....</td>
        </tr>
        <tr style={{ border: '3px solid lightblue',borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '3px solid lightblue' , borderColor: 'lightblue'  }}>
          <th>Kategori</th>
          <td>....</td>
        </tr>
        <tr style={{ border: '3px solid lightblue',borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '3px solid lightblue' , borderColor: 'lightblue'  }}>
          <th>Diterbitkan</th>
          <td>....</td>
          
        </tr>
        </tbody>
      </Table>
      <Card>
      <Button onClick={() => b1 ('/start')} className='bg-primary '>Baca</Button>
      </Card>
      </Col>
      </Row>
      <br/>
      <Row>
      <div>
        <h4>Deskripsi</h4>
        <h6>"The Da Vinci Code" adalah sebuah novel misteri karya Dan Brown yang diterbitkan pada tahun 2003. Novel ini mengikuti petualangan karakter utama Robert Langdon, seorang profesor simbologi dari Harvard University, dan Sophie Neveu, seorang ahli kriptografi, saat mereka berusaha memecahkan misteri yang melibatkan simbol-simbol tersembunyi di dalam karya seni dan sejarah.
            Cerita dimulai ketika Jacques Saunière, kurator di Louvre Museum di Paris, ditemukan tewas dengan pesan aneh di sekitarnya. Langdon dan Neveu menemukan bahwa Saunière adalah anggota rahasia dari organisasi kuno yang melindungi sebuah rahasia besar yang bisa mengguncangkan dasar-dasar agama Kristen.
            Mereka mengikuti petunjuk-petunjuk yang tersembunyi dalam karya seni terkenal dan mengungkap konspirasi yang melibatkan Vatikan, Illuminati, dan organisasi rahasia lainnya. Dalam perjalanan mereka, mereka menghadapi bahaya, teka-teki yang rumit, dan pengkhianatan yang tak terduga.
            "The Da Vinci Code" memadukan sejarah, simbolisme, seni, dan teka-teki untuk menciptakan cerita yang menggugah imajinasi pembaca. Novel ini menggambarkan konflik antara agama dan ilmu pengetahuan, serta mengajukan pertanyaan tentang kepercayaan, kekuasaan, dan pengetahuan yang tersembunyi.
            Sejak diterbitkan, "The Da Vinci Code" telah menjadi buku terlaris yang mendapatkan popularitas di seluruh dunia. Novel ini juga diadaptasi menjadi film pada tahun 2006, dengan Tom Hanks memerankan peran Robert Langdon.</h6>
      </div>
      </Row>
      
    </Container>

    
  );
}

export default Sebelumbaca;