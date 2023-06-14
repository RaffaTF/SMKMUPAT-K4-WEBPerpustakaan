import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanTiga() {
  const navigate = useNavigate();
  const pageNumber = 3; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
        <p>
          Mariposa adalah sebuah novel yang ditulis oleh ahli psikologi Amerika, Rick R. Reed. Novel ini mengisahkan tentang perjalanan hidup seorang remaja bernama Sarah yang memiliki keunikan dalam melihat dunia sekitarnya.
        </p>
        <p>
          Sarah memiliki kemampuan untuk melihat dan berkomunikasi dengan makhluk halus seperti peri, elf, dan hantu. Kehidupan Sarah yang penuh misteri dan keajaiban membuatnya terus dikejar oleh berbagai macam masalah.
        </p>
        <p>
          Dalam perjalanan hidupnya, Sarah bertemu dengan karakter-karakter menarik yang membantunya memahami dunia yang ia lihat. Namun, ia juga harus menghadapi bahaya dan tantangan yang mengancam keberadaannya.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h4')} style={{ float: 'right' }}>
          Next
        </Button>
      </Card>
    </div>
  );
}

export default HalamanTiga;
