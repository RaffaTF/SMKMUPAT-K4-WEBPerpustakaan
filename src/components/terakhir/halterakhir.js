import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navigasi() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const lastVisitedPage = localStorage.getItem('lastVisitedPage');

    if (lastVisitedPage && lastVisitedPage !== location.pathname) {
      navigate(lastVisitedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lastVisitedPage', location.pathname);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <div>
      {!isHomePage && (
        <button onClick={() => navigate('/')}>Beranda</button>
      )}
      {/* Tambahkan tombol navigasi lainnya sesuai kebutuhan */}
    </div>
  );
}

export default Navigasi;
