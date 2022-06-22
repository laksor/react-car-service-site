import React from 'react';
import logo from "../../../images/logo.png";
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
<footer className="footer-area footer-one ">
   <div className="footer-widget">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
               <div className="f-about">
                  <div className="footer-logo">
                     <a href="/">
                     <img src={logo} alt="Logo" />
                     </a>
                  </div>
                  <p className="text">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p>
               </div>
               <div className="footer-app-store">
                  <h5 className="download-title">Download Our App Now!</h5>
                  <ul>
                     <li>
                        <a href="/">
                        <img
                           src="https://cdn.ayroui.com/1.0/images/footer/app-store.svg"
                           alt="app"
                           />
                        </a>
                     </li>
                     <li>
                        <a href="/">
                        <img
                           src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                           alt="play"
                           />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
               <div className="footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                     <li><a href="/about">About</a></li>
                     <li><a href="/">Contact</a></li>
                     <li><a href="home#service">Services</a></li>
                     <li><a href="home#experts">Experts</a></li>
                  </ul>
               </div>
        
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
               <div className="footer-link">
                  <h6 className="footer-title">Services</h6>
                  <ul>
                     <li><a href="/">Products</a></li>
                     <li><a href="/">Business</a></li>
                     <li><a href="/">Developer</a></li>
                     <li><a href="/">Insights</a></li>
                  </ul>
               </div>
         
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
      
               <div className="footer-contact">
                  <h6 className="footer-title">Help & Suuport</h6>
                  <ul>
                     <li>
                        <i className="lni lni-map-marker"></i> Madison Street, NewYork,
                        USA
                     </li>
                     <li><i className="lni lni-phone-set"></i> +88 556 88545</li>
                     <li><i className="lni lni-envelope"></i> support@thecardoctor.com</li>
                  </ul>
               </div>
        
            </div>
         </div>
 
      </div>
 
   </div>
 
   <div className="footer-copyright">
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div
                  className="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
                  >
                  <p className="text">Copyright © {year} The Car Doctor. All Rights Reserved - Developed by <a href='https://github.com/laksor' target="_blank">Ahmed Laskor</a></p>
                  <ul className="social">
                     <li>
                        <a href="/">
                        <i className="lni lni-facebook-filled"></i>
                        </a>
                     </li>
                     <li>
                        <a href="/">
                        <i className="lni lni-twitter-original"></i>
                        </a>
                     </li>
                     <li>
                        <a href="/">
                        <i className="lni lni-instagram-filled"></i>
                        </a>
                     </li>
                     <li>
                        <a href="/"
                           ><i className="lni lni-linkedin-original"></i
                           ></a>
                     </li>
                  </ul>
               </div>
        
            </div>
         </div>
    
      </div>
   
   </div>

</footer>

    );
};

export default Footer;