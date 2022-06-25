import React from 'react';
import './Cta.css';

const Cta = () => {
    return (
        <div id='email' className='bg'>
 
        <section class="call-action-area call-action-one bg">
           <div class="container">
              <div class="row align-items-center call-action-content">
                 <div class="col-12 text-center">
                    <div class="call-action-text">
                       <h2 class="action-title">
                          Dont miss the discount!
                       </h2>
                       <p class="text-lg">
                         Get the latest directly to you inbox <br></br> Unsubscribe at any time. 
                       </p>
                    </div>
                 </div>
                 <div class="col-12 box">
                 <form autocomplete="off">
                 <div className='form-box'>
                 <input type="text" name='EmailAddress' placeholder='Enter your email'  autocomplete="nope"></input>
                 <button  type="submit">Subscribe</button>
                 </div>
                 </form>
                   
                 </div>
              </div>
    
           </div>
      
        </section>
   
        </div>
    );
};

export default Cta;