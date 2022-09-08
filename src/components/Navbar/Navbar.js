import React, {useState, useEffect} from 'react'
import {NavLink }from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 700) && (
       <div className="menubar">
         
          <div className="logo">Logo
          </div>
            <div className="links">


                    <ul className="list">
                                        
                            <NavLink to="/" > 
                                <li className="items">Home</li>
                            </NavLink>
                            <NavLink to="/about" > 
                                <li className="items">  About</li>
                            </NavLink>
                            <NavLink to="/services" > 
                                <li className="items">Services</li>
                            </NavLink>
                            <NavLink to="/contact" > 
                                <li className="items">Contact</li>
                            </NavLink>
                      </ul>
            </div>
       </div>
   
      )}

      <button onClick={toggleNav} className="nav-btn"><i class="fa-solid fa-bars"></i></button>
    </nav>
    

  )
}

