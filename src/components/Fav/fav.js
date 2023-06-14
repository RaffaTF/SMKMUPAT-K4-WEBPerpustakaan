import React from 'react';
import Card from 'react-bootstrap/Card';
import Navigasi from './nav';

const Favorit = () => {
  return (
    <div>
      <Navigasi />

      <div className="favorite-books">
      <h2 style={{ marginTop: '20px',  marginBottom: '30px' }}>Buku Terfavorit</h2>
        <div className="card-container">
        <Card style={{ width: '15rem', marginLeft: '100px' }}>
            <Card.Img
              variant="top"
              src="http://1.bp.blogspot.com/-kAeSaFEkgxc/VVW-A53HigI/AAAAAAAAJqI/2yxC5x3hY5Y/s1600/gambar%2Bbuku%2B(2).png"
              alt="Gambar Buku 1"
              style={{ width: 'auto', height: '300px' }}
            />
            <Card.Body>
              <Card.Title>Judul Buku 1</Card.Title>
              <Card.Text>Deskripsi singkat tentang buku ini.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '15rem' }}>
            <Card.Img
              variant="top"
              src="http://3.bp.blogspot.com/-8JvisF86ir0/VVW-O_lxkGI/AAAAAAAAJrQ/fvWLIkf41k4/s1600/gambar%2Bbuku%2B(28).jpg"
              alt="Gambar Buku 2"
              style={{ width: 'auto', height: '300px' }}
            />
            <Card.Body>
              <Card.Title>Judul Buku 2</Card.Title>
              <Card.Text>Deskripsi singkat tentang buku ini.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '15rem' }}>
            <Card.Img
              variant="top"
              src="http://3.bp.blogspot.com/-8JvisF86ir0/VVW-O_lxkGI/AAAAAAAAJrQ/fvWLIkf41k4/s1600/gambar%2Bbuku%2B(28).jpg"
              alt="Gambar Buku 2"
              style={{ width: 'auto', height: '300px' }}
            />
            <Card.Body>
              <Card.Title>Judul Buku 3</Card.Title>
              <Card.Text>Deskripsi singkat tentang buku ini.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '15rem' }}>
            <Card.Img
              variant="top"
              src="http://3.bp.blogspot.com/-8JvisF86ir0/VVW-O_lxkGI/AAAAAAAAJrQ/fvWLIkf41k4/s1600/gambar%2Bbuku%2B(28).jpg"
              alt="Gambar Buku 2"
              style={{ width: 'auto', height: '300px' }}
            />
            <Card.Body>
              <Card.Title>Judul Buku 4</Card.Title>
              <Card.Text>Deskripsi singkat tentang buku ini.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '15rem' }}>
            <Card.Img
              variant="top"
              src="http://3.bp.blogspot.com/-8JvisF86ir0/VVW-O_lxkGI/AAAAAAAAJrQ/fvWLIkf41k4/s1600/gambar%2Bbuku%2B(28).jpg"
              alt="Gambar Buku 2"
              style={{ width: 'auto', height: '300px' }}
            />
            <Card.Body>
              <Card.Title>Judul Buku 5</Card.Title>
              <Card.Text>Deskripsi singkat tentang buku ini.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Favorit;
