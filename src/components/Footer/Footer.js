import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            Copyright@2022 | All rights reserved

          </div>
          <div className="col-md-4">
          <ul class="">
                                        <li><NavLink className="footer_menu pl-15" to="/"><i class="fa-sharp fa-solid fa-house"></i> Home</NavLink></li>
                                        <li><NavLink className=" footer_menu pl-15" to="/About"> <i class="fa-solid fa-user"></i>  About </NavLink></li>
                                        <li><NavLink className=" footer_menu pl-15" to="/Services"> <i class="fa-regular fa-address-book"></i> Services </NavLink></li>
                                        <li><NavLink className=" footer_menu pl-15" to="/Prices"> <i class="fa-solid fa-square-dollar"></i>  Prices </NavLink></li>
                                        <li><NavLink className=" footer_menu pl-15" to="/Contact"> <i class="fa-regular fa-address-book"></i> Contact </NavLink></li>
                                    </ul>

          </div>
          <div className="col-md-4">
            <ul>
              <li><NavLink className="footer_menu pl-15" to="/facebook"><i class="fa-brands fa-facebook"></i> Facebook</NavLink></li>
             
            </ul>
           

          </div>
        </div>
      </div>


    </div>
  )
}

export default Footer