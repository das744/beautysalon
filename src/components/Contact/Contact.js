import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div> 
      <div className="contact-section">
        <h2 className='fade-in'> <span> OUR </span> Contact Details </h2>
        <div className=" contact-info">
         
              <div className="contact-card">
                <h6>Would you like to visit us</h6>

                <h3>Our Address <i class="fa fa-map-marker" aria-hidden="true"></i></h3>
                <p>Regent street</p>

              </div>
              <div className="contact-card">
              <h6>Would you like to call us</h6>
                <h3>Our phone no <i class="fa fa-phone-square" aria-hidden="true"></i></h3>
                <p>0430224546</p>
                
                </div>
                
                <div className="contact-card ">
                <h6>Would you like to follow us</h6>
                  <h3>facebook <i class="fa-brands fa-facebook"></i></h3>
                
                </div>
                </div>
         </div>
         </div>
        )
}

export default Contact