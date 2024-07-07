import React from "react";

function Contact() {
  return (
    <div id="contact">
        
          <div className="row mt-5">
          <div className="contact-box col-md-6">
              <h3>Send me a message</h3>
              <div className="contact-form">
              <form method="submit">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </form>
              </div>
              
            </div>  
            <div className="col-md-6">
            <div className="contact-info">
            <h3>Contact information</h3>
            
              <h5>Tell me about your projects</h5>
              <h5>Let's build projects together</h5>
            
            <div className="mt-4">
              <p>
                <i class="fa-solid fa-phone mr-2"></i>+91 9989331541
              </p>
              <p>
                <i class="fa-regular fa-envelope mr-2"></i>
                srishylamburla1@gmail.com
              </p>
            </div>
          </div>
            </div> 
            
          </div>
            
          
        </div>
      
    
  );
}

export default Contact;
