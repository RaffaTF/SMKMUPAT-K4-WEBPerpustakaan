import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanLima() {
  const navigate = useNavigate();
  const pageNumber = 5; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <p>
      Pada suatu hari yang cerah, Mariposa dan Diego memutuskan untuk mengikuti kompetisi seni nasional yang bergengsi. Mereka mempersiapkan diri dengan tekun dan memperlihatkan karya terbaik mereka. Kompetisi ini merupakan kesempatan besar bagi mereka untuk menunjukkan bakat dan kemampuan mereka kepada dunia.
        </p>
        <p>
        Akhirnya, saat pengumuman pemenang dilakukan, Mariposa dan Diego kaget dan bersorak gembira. Mariposa berhasil memenangkan penghargaan tertinggi, dan karyanya yang indah dan penuh emosi mendapat pengakuan yang luas. Ini adalah momen keberhasilan yang luar biasa bagi Mariposa, dan impian masa kecilnya mulai menjadi kenyataan.
        </p>
        <p>
        Namun, di balik keberhasilan itu, Mariposa merasa ada sesuatu yang kurang dalam hidupnya. Dia merenungkan arti sejati dari kehidupan dan pengorbanan yang telah dia buat dalam perjalanan menuju kesuksesan. Apakah keberhasilan materi dan pujian dari orang lain sudah cukup untuk membuatnya bahagia?
        </p>
        <p>
            Dalam penutup cerita, Mariposa membuat keputusan penting. Dia memutuskan untuk kembali ke desa kelahirannya, membawa dengan dia semua pelajaran dan inspirasi yang dia peroleh selama perjalanan hidupnya. Dia ingin membantu komunitasnya, menginspirasi mereka untuk bermimpi lebih besar dan menghadapi tantangan dengan keberanian.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h6')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/h4')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanLima;