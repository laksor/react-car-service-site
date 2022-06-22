import React from 'react';
import './Features.css';

const Features = () => {
    return (

    
        <section class="about-area about-one">
           <div class="container">
              <div class="row">
                 <div class="col-lg-12">
                    <div class="about-title text-center">
                       <h2 class="title fw-bold">Why Choose Us</h2>
                    </div>
                 </div>
              </div>
       
              <div class="row justify-content-center">
                 <div class="col-md-4 col-sm-8">
                    <div class="single-about-items">
                       <div class="items-icon">
                          <i class="lni lni-bullhorn"></i>
                       </div>
                       <div class="items-content">
                          <h4 class="items-title">Digital Marketing</h4>
                          <p class="text">
                             Short description for the ones who look for something new
                          </p>
                       </div>
                    </div>
                 
                 </div>
                 <div class="col-md-4 col-sm-8">
                    <div class="single-about-items">
                       <div class="items-icon">
                          <i class="lni lni-investment"></i>
                       </div>
                       <div class="items-content">
                          <h4 class="items-title">Consulting Services</h4>
                          <p class="text">
                             Short description for the ones who look for something new
                          </p>
                       </div>
                    </div>
                
                 </div>
                 <div class="col-md-4 col-sm-8">
                    <div class="single-about-items">
                       <div class="items-icon">
                          <i class="lni lni-handshake"></i>
                       </div>
                       <div class="items-content">
                          <h4 class="items-title">Business Solutions</h4>
                          <p class="text">
                             Short description for the ones who look for something new
                          </p>
                       </div>
                    </div>
                  
                 </div>
              </div>
            
           </div>
           
        </section>

    );
};

export default Features;