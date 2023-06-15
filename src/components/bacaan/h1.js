import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanSatu() {
  const navigate = useNavigate();
  const pageNumber = 1; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Bagian: 1</h2>
        <p>
          Mariposa lahir di sebuah desa kecil yang tersembunyi di pedalaman Meksiko. Desa itu dikelilingi oleh hutan lebat dan dikelompokkan oleh perbukitan hijau yang menghiasi lanskapnya. Di antara rumah-rumah beratap jerami yang sederhana, terdapat kehidupan yang penuh dengan kehangatan dan kebersamaan.
        </p>
        <p>
          Mariposa adalah anak kedua dari empat bersaudara. Ayahnya, Miguel, adalah seorang petani yang mencoba mencukupi kebutuhan keluarga dengan bertani di lahan kecil yang dimiliki mereka. Ibunya, Maria, adalah seorang ibu rumah tangga yang penuh kasih sayang dan menjaga keluarga dengan cinta dan perhatian yang tiada henti.
        </p>
        <p>
          Sejak kecil, Mariposa telah menunjukkan minat pada seni. Dia senang menggambar di pasir dengan jari-jarinya, menciptakan gambar-gambar yang hidup dan penuh warna. Walaupun tidak ada sumber belajar seni formal di desa mereka, Mariposa belajar dengan memperhatikan dunia di sekitarnya. Dia mengamati sayap kupu-kupu yang berwarna-warni, bunga-bunga yang mekar di taman, dan matahari terbenam yang mengecat langit dengan warna-warna magis. Ia mencoba menangkap keindahan ini melalui goresan-goresan sederhana pada kertas yang ditemukannya.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h2')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/baca')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanSatu;
