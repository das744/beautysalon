import React from 'react'
import './Services.css'
// import haircut from '../assets/hair-cut.jpg'
import SData from './SData'
import SCard from './SCard'


const Services = () => {
  return (
    <div>
    
        <div className="services">
    
    <h2 class="fade-in"> <span> OUR  </span> Services</h2>
    <div class="box-container">

    {SData.map((val,ind)=>{
                                return(
                                    <SCard 
                                    no={val.no} 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    // description={val.description}
                                   
                                    />
                                )
                              } )
}


      {/* <div class="box"> 
        <span class="number">1</span>
        <img src={haircut} alt=""/>
        <h3>Web Design</h3>
        <p>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, aspernatur.</p>
      </div>
      <div class="box">
        <span class="number">2</span>
        <img src={haircut} alt=""/>
        <h3>Web Davelooment</h3>
        <p>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, aspernatur.</p>
      </div>
      <div class="box">
        <span class="number">3</span>
        <img src={haircut} alt=""/>
        <h3>graphic Design</h3>
        <p>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, aspernatur.</p>
      </div>
      <div class="box">
        <span class="number">4</span>
        <img src={haircut} alt=""/>
        <h3>Seo marketing</h3>
        <p>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, aspernatur.</p>
      </div>
      <div class="box">
        <span class="number">5</span>
        <img src={haircut} alt=""/>
        <h3>wordpress website</h3>
        <p>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, aspernatur.</p>
      </div>
      <div class="box">
        <span class="number">6</span>
        <img src={haircut} alt=""/>
        <h3>E-commerce website </h3>
        <p>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Doloribus, aspernatur.</p>
      </div> */}



    </div>
 
                 
                       
              
                   
        </div>
               
               
    </div>
  )
}

export default Services