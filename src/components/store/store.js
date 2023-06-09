import { Container, Row, Col, Card } from 'react-bootstrap';
import './store.css';
import { Link } from 'react-router-dom';
const Store = () =>{
    return (
  
     <Container>
       <Row>
      <Link to="/home"id="button1">Home</Link>
      <Link to="/about"id="button2">About</Link>
      <Link to="/store"id="button3">Store</Link>
      <Link to="/"id="button4">Login</Link>
      </Row>
  <br/>
         <Row>
           <Col>
             <Card div class="Card">
               <Card.Img
             variant="top"
             src="https://deepublishstore.com/wp-content/uploads/2021/02/Matematika-Diskret-Teknik_Seng-Hansun-Convert-2-scaled.jpg"
             />
               <Card.Body>
                 <Card.Title>Education</Card.Title>
                 <Card.Text>Matematika,Bahasa,DLL</Card.Text>
                 <Link to="/materi1"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://m.media-amazon.com/images/I/51e8gpQV4WL.jpg"/>
               <Card.Body>
                 <Card.Title>War</Card.Title>
                 <Card.Text>The Last War</Card.Text>
                 <Link to="/materi2"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://m.media-amazon.com/images/I/71K2ywyk16L.jpg"/>
               <Card.Body>
                 <Card.Title>Science Fiction</Card.Title>
                 <Card.Text>Red Mars</Card.Text>
                 <Link to="/materi3"div class="Button">lebih</Link>
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
             src="https://kbimages1-a.akamaihd.net/08bb082e-e9d4-492e-b2ae-ee04233dbc33/1200/1200/False/treasure-island-450.jpg"/>
               <Card.Body>
                 <Card.Title>Advanture</Card.Title>
                 <Card.Text>Treasure Island</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://upload.wikimedia.org/wikipedia/en/b/b9/Bird_Box_2014_book_cover.jpg"/>
               <Card.Body>
                 <Card.Title>Horror</Card.Title>
                 <Card.Text>Bird Box</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://m.media-amazon.com/images/I/81m1s4wIPML.jpg"/>
               <Card.Body>
                 <Card.Title>Fantasy</Card.Title>
                 <Card.Text>Harry Potter</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
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
             src="https://m.media-amazon.com/images/I/81+jKW2zSEL.jpg"/>
               <Card.Body>
                 <Card.Title>The Spartans: An Epic History </Card.Title>
                 <Card.Text>Oleh: Paul Anthony Cartledge</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdo0FiuJtKd76mPHqQyo0HBLFQnfFSoeenxBmmNhPCBITy8n4PflPYTfQjofVwKD8iJEc&usqp=CAU"
             />
               <Card.Body>
                 <Card.Title>The Da Vinci Code</Card.Title>
                 <Card.Text>Oleh: Dan Brown</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"/>
               <Card.Body>
                 <Card.Title>The Lord of the Rings </Card.Title>
                 <Card.Text>Oleh: J.R.R. Tolkien</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
         </Row> 
         <Row>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://html.scribdassets.com/2mc16edmps9m8neq/images/1-55d881c7ec.jpg"/>
               <Card.Body>
                 <Card.Title>Kewirausahaan</Card.Title>
                 <Card.Text>Oleh:Dr Hartine,s.E.,M.M</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://opac.perpusnas.go.id/uploaded_files/sampul_koleksi/original/Monograf/1168053.jpg?rnd=81819096" />
               <Card.Body>
                 <Card.Title>Si Kancil</Card.Title>
                 <Card.Text>Oleh:Ari Wulandari</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
                 </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://a.cdn-myedisi.com/book/cover/bse-a_596f09f7e75d7203700660.jpg"/>
               <Card.Body>
                 <Card.Title>ips</Card.Title>
                 <Card.Text>kelas 5</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
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
             src="https://a.cdn-myedisi.com/book/cover/bse-a_5c3c4132e2bd4681735087.jpg"/>
               <Card.Body>
                 <Card.Title>pendidikan</Card.Title>
                 <Card.Text>Pkn</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://cdn.gramedia.com/uploads/items/200426782_BUKU-PINTAR-PANTU.jpg"/>
               <Card.Body>
                 <Card.Title>Pantun Dan Puisi</Card.Title>
                 <Card.Text>Oleh:Andi Sunaryo</Card.Text>
                 <Link to="/"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
           <Col>
           <Card>
               <Card.Img
             variant="top"
             src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/11/af1f1875-162e-4f3c-a7ec-5d5319bb8445.jpg"/>
               <Card.Body>
                 <Card.Title>Ramuan Obat Alami</Card.Title>
                 <Card.Text>Oleh:W Surya Enora</Card.Text>
                 <Link to="/https://simdos.unud.ac.id/uploads/file_pendidikan_1_dir/a6a48203e23370286113d07440fa07ef.pdf"div class="Button">lebih</Link>
               </Card.Body>
             </Card>
           </Col>
         </Row>
         <br/>   
       </Container>
       
     
       
     );
   }
export default Store