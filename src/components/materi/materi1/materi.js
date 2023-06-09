import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Materi1 = () =>{
  return (
    <Container>

<Link to="/store" div class="Button">kembali</Link>
<Row>
<Col>
<Card div class="Card">

  <Card.Body>
    <Card.Title>Matematika Diskrit</Card.Title>
    <Card.Text> Matematika diskrit atau diskret adalah cabang matematika yang membahas segala sesuatu yang bersifat diskrit. Diskrit disini artinya tidak saling berhubungan (lawan dari kontinyu). Objek yang dibahas dalam Matematika Diskrit – seperti bilangan bulat, graf, atau kalimat logika – tidak berubah secara kontinyu, namun memiliki nilai yang tertentu dan terpisah. Beberapa hal yang dibahas dalam matematika ini adalah teori himpunan, teori kombinatorial, teori bilangan, permutasi, fungsi, rekursif, teori graf, dan lain-lain. Matematika diskrit merupakan mata kuliah utama dan dasar untuk bidang ilmu komputer atau informatika.</Card.Text>
     <Card.Text>Topik-topik yang dibahas atau dipelajari dalam matematika diskrit:</Card.Text> 
     <Card.Text>1.Logika (logic) dan penalaran </Card.Text>
     <Card.Text>2.Teori Himpunan (set)</Card.Text>
     <Card.Text>3.Matriks (matrice)</Card.Text>
     <Card.Text>4.Relasi dan Fungsi (relation and function)</Card.Text>
     <Card.Text>5.Induksi Matematik (mathematical induction)</Card.Text>
     <Card.Text>6.Algoritme (algorithms)</Card.Text>
     <Card.Text>7.Teori Bilangan Bulat (integers)</Card.Text>
     <Card.Text>8.Barisan dan Deret (sequences and series)</Card.Text>
     <Card.Text>9.Teori Grup dan Ring (group and ring)</Card.Text>
     <Card.Text>10.Aljabar Boolean (Boolean algebra)</Card.Text>
     <Card.Text>11.Kombinatorial (combinatorics) [  ]</Card.Text>
     <Card.Text>12.Teori Peluang Diskrit (discrete probability)</Card.Text>
     <Card.Text>13.Fungsi Pembangkit dan Analisis Rekurens </Card.Text>
     <Card.Text>14.Teori Graf (graph–included tree)</Card.Text>
     <Card.Text>15.Kompleksitas Algoritme (algorithm complexity)</Card.Text>
     <Card.Text>16.Otomata & Teori Bahasa Formal (automata and formal language theory)</Card.Text>
    
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
  );
}
export default Materi1