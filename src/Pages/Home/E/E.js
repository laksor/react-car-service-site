import React from 'react';
import './E.css';
import experts6 from '../../../images/experts/expert-6.png';
import experts5 from '../../../images/experts/expert-5.jpg';
import experts4 from '../../../images/experts/expert-4.jpg';
import experts3 from '../../../images/experts/expert-3.jpg';

const E = () => {
    return (
        <div className='bg-light p-5'>
        <h1 className='text-center heading mb-4'>Our Services</h1>
        <section className="team-area mb-5">
        <div className="container">
           <div className="row">
              <div className="col-lg-3 col-md-6">
                 <div className="single-team text-center team-style-one">
                    <div className="team-image">
                       <img src={experts5} alt="Team" />
                    </div>
                    <div className="team-content">
                       <h4 className="name">Oil Changes</h4>
                       <span className="sub-title">Starting @ $99</span>
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
                             <i className="lni lni-linkedin-original"></i>
                             </a>
                          </li>
                       </ul>
                    </div>
                 </div>
        
              </div>
              <div className="col-lg-3 col-md-6">
                 <div className="single-team text-center team-style-one">
                    <div className="team-image">
                       <img src={experts6} alt="Team" />
                    </div>
                    <div className="team-content">
                       <h4 className="name">Engine And Cabn Filters</h4>
                       <span className="sub-title">Better Performance</span>
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
                             <i className="lni lni-linkedin-original"></i>
                             </a>
                          </li>
                       </ul>
                    </div>
                 </div>
          
              </div>
              <div className="col-lg-3 col-md-6">
                 <div className="single-team text-center team-style-one">
                    <div className="team-image">
                       <img src={experts4} alt="Team" />
                    </div>
                    <div className="team-content">
                       <h4 className="name">Wiper Blades</h4>
                       <span className="sub-title">Better Visibilty</span>
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
                             <i className="lni lni-linkedin-original"></i>
                             </a>
                          </li>
                       </ul>
                    </div>
                 </div>
                
              </div>
              <div className="col-lg-3 col-md-6">
                 <div className="single-team text-center team-style-one">
                    <div className="team-image">
                       <img src={experts3} alt="Team" />
                    </div>
                    <div className="team-content">
                       <h4 className="name">Wiper  Blades</h4>
                       <span className="sub-title">Drive Saver </span>
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
                             <i className="lni lni-linkedin-original"></i>
                             </a>
                          </li>
                       </ul>
                    </div>
                 </div>
          
              </div>
           </div>
        
        </div>
        
        </section>
        </div>
    );
};

export default E;