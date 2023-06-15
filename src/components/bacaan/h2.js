import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanDua() {
  const navigate = useNavigate();
  const pageNumber = 2; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <p>
          Mariposa juga menghabiskan banyak waktu di perpustakaan kecil desa mereka. Meskipun buku-buku seni yang ada terbatas, ia mempelajari teknik-teknik dasar dan menyerap inspirasi dari karya-karya seniman terkenal yang ditemukan dalam buku-buku itu. Ia menyimpan sejuta impian di dalam hatinya, bermimpi suatu hari nanti dapat mengungkapkan keindahan dunianya sendiri melalui lukisan-lukisannya.
        </p>
        <p>
          Meskipun hidup dalam situasi yang sulit, keluarga Mariposa selalu saling mendukung dan memberi cinta satu sama lain. Mereka mengatasi tantangan dengan semangat yang tinggi dan tak pernah kehilangan harapan. Meski ada saat-saat ketika Mariposa merasa terjebak dalam keterbatasan dan ingin menjelajahi dunia yang lebih besar, cintanya pada keluarga dan desa membuatnya tetap bertahan dan berjuang dengan gigih.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h3')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/h1')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanDua;
