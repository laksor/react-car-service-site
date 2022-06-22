import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
<footer class="footer-area footer-one ">
   <div class="footer-widget">
      <div class="container">
         <div class="row">
            <div class="col-xl-6 col-lg-4 col-sm-12">
               <div class="f-about">
                  <div class="footer-logo">
                     <a href="javascript:void(0)">
                     <img src="https://cdn.ayroui.com/1.0/images/footer/logo.svg" alt="Logo" />
                     </a>
                  </div>
                  <p class="text">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p>
               </div>
               <div class="footer-app-store">
                  <h5 class="download-title">Download Our App Now!</h5>
                  <ul>
                     <li>
                        <a href="javascript:void(0)">
                        <img
                           src="https://cdn.ayroui.com/1.0/images/footer/app-store.svg"
                           alt="app"
                           />
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                        <img
                           src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                           alt="play"
                           />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-sm-4">
               <div class="footer-link">
                  <h6 class="footer-title">Company</h6>
                  <ul>
                     <li><a href="javascript:void(0)">About</a></li>
                     <li><a href="javascript:void(0)">Contact</a></li>
                     <li><a href="javascript:void(0)">Marketing</a></li>
                     <li><a href="javascript:void(0)">Awards</a></li>
                  </ul>
               </div>
        
            </div>
            <div class="col-xl-2 col-lg-3 col-sm-4">
               <div class="footer-link">
                  <h6 class="footer-title">Services</h6>
                  <ul>
                     <li><a href="javascript:void(0)">Products</a></li>
                     <li><a href="javascript:void(0)">Business</a></li>
                     <li><a href="javascript:void(0)">Developer</a></li>
                     <li><a href="javascript:void(0)">Insights</a></li>
                  </ul>
               </div>
         
            </div>
            <div class="col-xl-2 col-lg-3 col-sm-4">
      
               <div class="footer-contact">
                  <h6 class="footer-title">Help & Suuport</h6>
                  <ul>
                     <li>
                        <i class="lni lni-map-marker"></i> Madison Street, NewYork,
                        USA
                     </li>
                     <li><i class="lni lni-phone-set"></i> +88 556 88545</li>
                     <li><i class="lni lni-envelope"></i> support@ayroui.com</li>
                  </ul>
               </div>
        
            </div>
         </div>
 
      </div>
 
   </div>
 
   <div class="footer-copyright">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div
                  class="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
                  >
                  <p class="text">Copyright © {year} The Car Doctor. All Rights Reserved - Developed by <a href=''>Ahmed Laskor</a></p>
                  <ul class="social">
                     <li>
                        <a href="javascript:void(0)">
                        <i class="lni lni-facebook-filled"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                        <i class="lni lni-twitter-original"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                        <i class="lni lni-instagram-filled"></i>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)"
                           ><i class="lni lni-linkedin-original"></i
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