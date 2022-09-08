import React from 'react'
import { NavLink } from "react-router-dom";
import aboutus from '../assets/img6.jpg'
import './About.css'


const About = () => {
  return (
    <div  > 
    <div className="container about_section">
      <div className="about_us">
            <h2 className='fade-in'>About <span> US</span></h2>
        
       </div>

      <div className="container about_info">
          
          <div className="row">
          <div className="col-md-6 about_content">
            <h5>Welcome to </h5>
                <h3>My Beauty Studio</h3>
              
                <p>we guarantee our clients the very best service every time,
                we are not just about hair we pride ourselves on providing outstanding customer service
                every time. At <span> Mernda Beauty Parlor</span> we know that a clients hair is their treasure, they must feel
                great about it everyday and feel good wearing it!! The success of our business has always been
                based in attention to detail, quality and caring about the needs of our clients. </p>
                <NavLink class="navbar-brand btn" to="/Contact">
                                   Contact Us
                                </NavLink>
               

            </div>
            <div className="col-md-6 about_img">
              <img src={aboutus} alt=""  />

           </div>
           
      </div>
      </div>
    </div>    
       </div>
  )
}

export default About