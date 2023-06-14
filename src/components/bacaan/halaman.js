import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanBacaan() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '20px' }}>Mariposa</h3>
          <img src="https://2.bp.blogspot.com/-phuOf-0TW5o/XOUAiZJv7zI/AAAAAAAAG1k/Gk2D94glDn02lV18eYEE6YQI7V1ypCfWwCLcBGAs/s1600/Download%2BNovel%2BMariposa%2Bpdf%2BKarya%2BLuluk%2BHF.JPG" alt="Gambar Mariposa" style={{ width: '200px', marginBottom: '20px' }} />
        </div>
        <p>
          Mariposa adalah sebuah novel yang ditulis oleh ahli psikologi Amerika, Rick R. Reed. Novel ini mengisahkan tentang perjalanan hidup seorang remaja bernama Sarah yang memiliki keunikan dalam melihat dunia sekitarnya.
        </p>
        <p>
          Sarah memiliki kemampuan untuk melihat dan berkomunikasi dengan makhluk halus seperti peri, elf, dan hantu. Kehidupan Sarah yang penuh misteri dan keajaiban membuatnya terus dikejar oleh berbagai macam masalah.
        </p>
        <p>
          Dalam perjalanan hidupnya, Sarah bertemu dengan karakter-karakter menarik yang membantunya memahami dunia yang ia lihat. Namun, ia juga harus menghadapi bahaya dan tantangan yang mengancam keberadaannya.
        </p>
        <Button type="primary" onClick={() => navigate('/h1')} style={{ float: 'right' }}>
          Next
        </Button>
      </Card>
    </div>
  );
}

export default HalamanBacaan;
