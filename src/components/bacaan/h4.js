import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanEmpat() {
  const navigate = useNavigate();
  const pageNumber = 4; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <p>
          Mariposa dengan senang hati menerima tawaran Alejandro. Mereka mulai bertemu secara teratur, dan Mariposa belajar banyak hal baru tentang seni dari Alejandro. Dia belajar tentang teknik menggambar dan melukis, tentang berbagai aliran seni, dan juga tentang cara mengekspresikan diri melalui karya seni.
        </p>
        <p>
          Namun, perjalanan Mariposa tidaklah mudah. Dia sering merasa putus asa dan lelah karena kesulitan hidup dan tuntutan pekerjaannya di kafe. Tapi Alejandro selalu memberinya semangat dan mengingatkannya untuk tidak pernah menyerah pada impian dan hasratnya.
        </p>
        <p>
          Sementara itu, Mariposa juga mengalami rintangan dalam hubungannya dengan Diego, seorang pemuda yang juga bermimpi menjadi seniman. Mereka saling mencintai dan saling mendukung dalam perjalanan masing-masing, tetapi adakalanya perbedaan pendapat dan kekhawatiran hidup menguji hubungan mereka. Namun, mereka selalu menemukan cara untuk mengatasi rintangan dan tetap bersama.
        </p>
        <p>
        Dalam perjalanan hidupnya, Mariposa belajar menghadapi ketakutan dan kelemahannya. Dia menyadari bahwa keberanian adalah kunci untuk melampaui rintangan dan mencapai impian. Dia belajar mengambil risiko dan menghadapi tantangan dengan kepala tegak, mengandalkan keterampilan dan bakatnya untuk menciptakan karya seni yang luar biasa.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('/h5')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/h3')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanEmpat;
