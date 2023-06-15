import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function HalamanPan() {
  const navigate = useNavigate();
  const pageNumber = 8; // Set the page number here

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card className="custom-card" style={{ width: 500, height: 'auto' }}>
      <p>
      Namun, di tengah semua kesuksesan itu, Mariposa mulai merenung tentang arti sebenarnya dari kehidupannya. Apakah keberhasilan dan kepuasan diri saja cukup? Dia merasa ada yang kurang, dan kebutuhan untuk memberikan kembali kepada komunitasnya menjadi semakin kuat.
        </p>
        <p>
        Dalam momen puncak karirnya, Mariposa membuat keputusan berani. Dia memutuskan untuk kembali ke desa kelahirannya dan menggunakan seninya sebagai sarana untuk memberikan harapan dan inspirasi kepada mereka yang membutuhkan. Dia mendirikan pusat seni di desa, yang memberikan pelatihan seni dan peluang untuk anak-anak dan orang dewasa untuk mengembangkan bakat mereka.
        </p>
        <p>
        Mariposa menemukan kepuasan sejati dalam memberikan dan berbagi dengan orang lain. Dia menyadari bahwa impian dan kesuksesan hanyalah bagian kecil dari hidupnya. Yang lebih penting adalah cinta, keberanian, dan keberanian untuk mengikuti impian kita dengan tujuan yang lebih besar.
        </p>
        <p>
        Dengan mengabdikan dirinya kepada komunitasnya, Mariposa tidak hanya meraih kepuasan pribadi, tetapi juga membangun warisan dan pengaruh yang melampaui hidupnya sendiri. Cerita cintanya bersama Diego tetap kuat dan penuh dengan dukungan dan kebersamaan dalam mewujudkan impian mereka.
        </p>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>-{pageNumber}-</p>
        </div>
        <Button type="primary" onClick={() => navigate('#')} style={{ float: 'right' }}>
          Next
        </Button>
        <Button type="primary" onClick={() => navigate('/h7')} style={{ float: 'left' }}>
         back
        </Button>
      </Card>
    </div>
  );
}

export default HalamanPan;