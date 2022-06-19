import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='down  text-center mt-4 bg-primary p-5 text-white'>
        <p><small>Copyright @ {year}</small></p>
        </footer>
       
    );
};

export default Footer;