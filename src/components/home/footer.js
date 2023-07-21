import React from "react";

const Footer = () => {
    return(
        <>
         <footer style={footerStyle}>
      <p>&copy; 2023-{new Date().getFullYear()} E-Libro. Sistem Informasi Perpustakaan.</p>
    </footer>
        </>

    );
}
const footerStyle = {
    backgroundColor: '#000',
    padding: '1rem',
    textAlign: 'center',
    color: '#fff',
  };

export default Footer