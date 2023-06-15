import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanTu() {
  const navigate = useNavigate();
  const pageNumber = 7; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <p>
      Perjalanan cinta mereka juga mengajarkan Mariposa dan Diego tentang komitmen dan pengorbanan. Mereka harus menghadapi tantangan jarak jauh saat Diego mendapatkan kesempatan untuk belajar di luar negeri. Namun, mereka berdua sepakat bahwa mimpi individu mereka tidak boleh menghalangi cinta mereka.
        </p>
        <p>
        Mariposa terus mengembangkan keterampilan seninya dan menghasilkan karya-karya yang semakin menarik perhatian. Ketika Diego kembali setelah menyelesaikan studinya, mereka berdua membuat keputusan penting untuk berkomitmen satu sama lain dan membangun masa depan bersama.
        </p>
        <p>
        Dalam sebuah kompetisi seni nasional yang bergengsi, Mariposa dan Diego memutuskan untuk mengikuti bersama. Mereka menyajikan karya-karya mereka yang paling pribadi dan menggambarkan perjalanan hidup mereka. Saat pengumuman pemenang dibacakan, kegembiraan dan kecemasan memenuhi ruangan. Dan akhirnya, nama Mariposa dan Diego disebut sebagai pemenang pertama dan kedua.
        </p>
        <p>
        Kemenangan itu memperkuat keyakinan Mariposa dan Diego akan bakat mereka dan membuat mereka semakin dekat dalam pencapaian impian mereka. Karya-karya mereka dipamerkan di galeri-galeri bergengsi, dan mereka mulai mendapatkan pengakuan luas dalam dunia seni.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h8')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/h6')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanTu;