import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
        <h1 className='text-center mt-5 heading'>Our Latest Blogs</h1>
        <section className="blog-area pb-5 text-center">
           <div className="container">
              <div className="row justify-content-center">
                 <div className="col-lg-4 col-md-8 col-sm-10">
                    <div className="single-blog blog-style-one">
                       <div className="blog-image">
                          <a href="/"
                             ><img src="https://cdn.ayroui.com/1.0/images/blog/1.jpg" alt="Blog"
                             /></a>
                          
                       </div>
                       <div className="blog-content">
                          <h5 className="blog-title">
                             <a href="/">
                             Budget-Friendly Design Ideas to Transform Your Office
                             </a>
                          </h5>
                          <span><i className="lni lni-calendar"></i> Mar 23, 2022</span>
                          <span><i className="lni lni-comments-alt"></i> 24 Comment</span>
                          <p className="text">
                             Create a workspace your team will love with these money-saving
                             interior Ui/Ux design tips Learn how People.
                          </p>
                          <a className="more text-decoration-none border rounded-pill px-3 py-3" href="/">READ MORE</a>
                       </div>
                    </div>
         
                 </div>
                 <div className="col-lg-4 col-md-8 col-sm-10">
                    <div className="single-blog blog-style-one">
                       <div className="blog-image">
                          <a href="/"
                             ><img src="https://cdn.ayroui.com/1.0/images/blog/2.jpg" alt="Blog"
                             /></a>
                          
                       </div>
                       <div className="blog-content">
                          <h5 className="blog-title">
                             <a href="/">
                             Budget-Friendly Design Ideas to Transform Your Office
                             </a>
                          </h5>
                          <span><i className="lni lni-calendar"></i> Mar 23, 2022</span>
                          <span><i className="lni lni-comments-alt"></i> 24 Comment</span>
                          <p className="text">
                             Create a workspace your team will love with these money-saving
                             interior Ui/Ux design tips Learn how People.
                          </p>
                          <a className="more text-decoration-none border rounded-pill px-3 py-3" href="/">READ MORE</a>
                       </div>
                    </div>
                
                 </div>
                 <div className="col-lg-4 col-md-8 col-sm-10">
                    <div className="single-blog blog-style-one">
                       <div className="blog-image">
                          <a href="/"
                             ><img src="https://cdn.ayroui.com/1.0/images/blog/3.jpg" alt="Blog"
                             /></a>
                          
                       </div>
                       <div className="blog-content">
                          <h5 className="blog-title">
                             <a href="/">
                             Budget-Friendly Design Ideas to Transform Your Office
                             </a>
                          </h5>
                          <span><i className="lni lni-calendar"></i> Mar 23, 2022</span>
                          <span><i className="lni lni-comments-alt"></i> 24 Comment</span>
                          <p className="text">
                             Create a workspace your team will love with these money-saving
                             interior Ui/Ux design tips Learn how People.
                          </p>
                          <a className="more text-decoration-none border rounded-pill px-3 py-3" href="/">READ MORE</a>
                       </div>
                    </div>
       
                 </div>
              </div>

           </div>

        </section>
  
        </div>
    );
};

export default Blogs;