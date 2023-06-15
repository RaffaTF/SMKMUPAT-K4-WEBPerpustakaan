import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanEnam() {
  const navigate = useNavigate();
  const pageNumber = 6; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Bagian: 3</h2>
      <p>
      Mariposa juga mengalami perjalanan cinta yang mengubah hidupnya. Dia jatuh cinta pada Diego, seorang pemuda yang memiliki mimpi serupa dengannya. Mereka saling mendukung dan membantu satu sama lain dalam mencapai impian mereka. Namun, mereka juga menghadapi rintangan dan ujian yang menguji hubungan mereka.
        </p>
        <p>
        Mariposa dan Diego saling melengkapi. Mereka menghabiskan banyak waktu bersama, berbicara tentang seni, mimpi, dan harapan mereka di masa depan. Keduanya adalah sumber inspirasi satu sama lain, memberikan dorongan yang dibutuhkan saat mereka merasa putus asa.
        </p>
        <p>
        Namun, tidak semua perjalanan mereka lancar. Ada saat-saat ketika Mariposa dan Diego meragukan diri mereka sendiri. Mereka menghadapi penolakan dan kritik terhadap karya seni mereka. Ketika Mariposa gagal dalam sebuah kompetisi seni, dia merasa putus asa dan berpikir untuk menyerah.
        </p>
        <p>
        Tetapi Diego, dengan keberanian dan kasih sayangnya, meyakinkan Mariposa untuk tidak menyerah. Dia mengingatkannya tentang semangat dan bakat luar biasa yang dimiliki Mariposa. Bersama-sama, mereka menghadapi rintangan dan melawan keraguan mereka sendiri. Cinta mereka menjadi pendorong yang kuat untuk terus maju.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h7')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/h5')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanEnam;