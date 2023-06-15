import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanTiga() {
  const navigate = useNavigate();
  const pageNumber = 3; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Bagian: 2</h2>
        <p>
          Setelah kehilangan rumah mereka akibat bencana alam, Mariposa dan keluarganya terpaksa meninggalkan desa kecil mereka dan pindah ke kota besar. Mereka berusaha memulai hidup baru, namun kenyataan kehidupan di kota membawa banyak tantangan bagi mereka.
        </p>
        <p>
          Mariposa, sebagai anak tertua, merasa bertanggung jawab untuk membantu mencari nafkah bagi keluarganya. Dia mencari pekerjaan dengan tekun dan akhirnya mendapatkan pekerjaan sebagai pelayan di sebuah kafe. Meskipun pekerjaannya tidak sesuai dengan mimpinya sebagai seorang pelukis, Mariposa tetap bersemangat dan menjaga api mimpinya tetap menyala.
        </p>
        <p>
          Saat bekerja di kafe, Mariposa sering berinteraksi dengan pelanggan yang beragam. Beberapa di antaranya adalah seniman dan penyair yang telah mencapai keberhasilan dalam bidang seni. Mereka berbagi cerita dan pengalaman hidup mereka dengan Mariposa, memberinya harapan dan inspirasi.
        </p>
        <p>
          Suatu hari, ketika kafe sedang mengadakan pameran seni lokal, Mariposa memiliki kesempatan bertemu dengan seorang pelukis terkenal bernama Alejandro Hernandez. Alejandro tertarik pada bakat dan semangat Mariposa dalam seni. Dia menawarkan diri untuk menjadi mentornya dan membantu mengembangkan keterampilan seninya.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h4')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/h2')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanTiga;
