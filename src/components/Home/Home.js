import React from 'react'
import { NavLink } from "react-router-dom";

import About from '../About/About'
import Services from '../Services/Services'
import Prices from '../Prices/Prices';
import Contact from '../Contact/Contact'

import './Home.css'


const Home = () => {
  return (
    <div>  
          <div className="hero_section">
            <div className="design1"></div>
            <div className="design2"></div>
            <div className="design3"></div>
              <div className="hero_content container ">
                
              <h1 >mernda Beauty Parlor</h1>
                <h3> We care about <span> OUR</span> Community, Connection and Clients </h3>
              <NavLink class = "btn btn-white btn-animate fade-in" to="/Contact">
                                      Contact Us
                                    </NavLink>       

              </div>     
              <div className="arrow arrow-down"></div>
          </div>
         

  
        <About/>
        <Services/>
        <Prices/>
        <Contact/>
     
        
    </div>



  
    
  )
}

export default Home