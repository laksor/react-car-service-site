import React from 'react';
import Cta from '../Home/Cta/Cta';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact'>
        
        <section class="contact-area" >
        <h1 className='text-center p-4 heading'>Contact Us</h1>
           <div class="container">
              <div class="row">
                 <div class="col-xl-7 col-lg-8">
                    <div class="section-title mt-45">
                       <h3 class="title">Get in touch</h3>
                    </div>
                    <div class="contact-form form-style-four mt-15">
                       <form action="#">
                          <div class="row">
                             <div class="col-md-6">
                                <div class="form-input mt-15">
                                   <label>Full Name</label>
                                   <div class="input-items default">
                                      <i class="lni lni-user"></i>
                                      <input type="text" placeholder="John Doe" />
                                   </div>
                                </div>
                           
                             </div>
                             <div class="col-md-6">
                                <div class="form-input mt-15">
                                   <label>Email Address</label>
                                   <div class="input-items default">
                                      <i class="lni lni-envelope"></i>
                                      <input type="text" placeholder="admin@uideck.com" />
                                   </div>
                                </div>
                         
                             </div>
                             <div class="col-md-6">
                                <div class="form-input mt-15">
                                   <label>Phone Number</label>
                                   <div class="input-items default">
                                      <i class="lni lni-phone"></i>
                                      <input type="text" placeholder="01234567890" />
                                   </div>
                                </div>
                        
                             </div>
                             <div class="col-md-6">
                                <div class="form-input mt-15">
                                   <label>Subject</label>
                                   <div class="input-items default">
                                      <i class="lni lni-bubble"></i>
                                      <input type="text" placeholder="Type here" />
                                   </div>
                                </div>
                    
                             </div>
                             <div class="col-md-12">
                                <div class="form-input mt-15">
                                   <label>Your Message</label>
                                   <div class="input-items default">
                                      <i class="lni lni-pencil-alt"></i>
                                      <textarea
                                         placeholder="Type your message here"
                                         ></textarea>
                                   </div>
                                </div>
                          
                             </div>
                             <div class="col-md-12">
                                <div class="single-form mt-15">
                                   <div class="input-form rounded-buttons">
                                      <button
                                         class="btn primary-btn rounded-full"
                                         type="submit"
                                         >
                                      SEND MESSAGE
                                      </button>
                                   </div>
                                </div>
                            
                             </div>
                          </div>
                        
                       </form>
                    </div>
                  
                 </div>
                 <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
                    <div class="section-title mt-5">
                       <h3 class="title">Contact Information</h3>
                    </div>
                    <div class="contact-info">
                       <ul class="info">
                          <li>
                             <div class="single-info">
                                <div class="info-icon">
                                   <i class="lni lni-map-marker"></i>
                                </div>
                                <div class="info-content">
                                   <p class="text">
                                   Madison Street, NewYork, USA
                                   </p>
                                </div>
                             </div>
                           
                          </li>
                          <li>
                             <div class="single-info">
                                <div class="info-icon">
                                   <i class="lni lni-phone"></i>
                                </div>
                                <div class="info-content">
                                   <p class="text">+61 (8) 8234 3555</p>
                                </div>
                             </div>
                        
                          </li>
                          <li>
                             <div class="single-info">
                                <div class="info-icon">
                                   <i class="lni lni-phone-set"></i>
                                </div>
                                <div class="info-content">
                                   <p class="text">+61 (8) 8234 3555</p>
                                </div>
                             </div>
                        
                          </li>
                          <li>
                             <div class="single-info">
                                <div class="info-icon">
                                   <i class="lni lni-envelope"></i>
                                </div>
                                <div class="info-content">
                                   <p class="text">support@thecardoctor.com</p>
                                </div>
                             </div>
                        
                          </li>
                       </ul>
                       <ul class="social mt-5">
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
                             <i class="lni lni-instagram-original"></i>
                             </a>
                          </li>
                          <li>
                             <a href="javascript:void(0)">
                             <i class="lni lni-linkedin-original"></i>
                             </a>
                          </li>
                       </ul>
                    </div>
                   
                 </div>
              </div>
         
           </div>
        </section>
      <Cta></Cta>
        </div>
    );
};

export default Contact;