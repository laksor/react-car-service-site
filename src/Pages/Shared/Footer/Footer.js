import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-4 bg-primary p-5 text-white'>
        <p><small>Copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;