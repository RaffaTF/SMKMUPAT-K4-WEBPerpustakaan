import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Kartu() {
  return (
    <div className="card-container" style={{ display: 'flex' , marginLeft: '100px'}}>
      <Card style={{ width: '18rem', marginRight: '100px' }}>
        <Card.Img
          variant="top"
          src="https://deepublishstore.com/wp-content/uploads/2021/02/Matematika-Diskret-Teknik_Seng-Hansun-Convert-2-scaled.jpg"
          style={{ width: 'auto', height: '300px' }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', marginRight: '100px' }}>
        <Card.Img
          variant="top"
          src="https://www.rajagrafindo.co.id/wp-content/uploads/2017/08/Bahasa-Indonesia-Untuk-Perguruan-Tinggi.jpg"
          style={{ width: 'auto', height: '300px' }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', marginRight: '100px' }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/9a/24/d4/9a24d48eafa6ba090c13cb91bcda5323.jpg"
          style={{ width: 'auto', height: '300px' }}
        />
        <Card.Body>
          <Card.Title>Susah Sekali</Card.Title>
          <Card.Text>menambahkan 3 card di bawah</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
    </div>
    
  
    
  );
}

export default Kartu;