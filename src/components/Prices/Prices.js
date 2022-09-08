import React from 'react'
import PCard from './PCard'
import PData from './PData'
import './Prices.css'


const Prices = () => {
  return (
   
        <div className="price-section">
            <h2 className="fade-in" > <span> OUR</span> Prices</h2 >
                <div className="price-info">
                   
                            {PData.map((val,ind)=>{
                                return(
                                    <PCard  
                                    title={val.title}
                                    description={val.description}
                                    design1={val.design1}
                                    design2={val.design2}
                                    design3={val.design3} 
                                    design4={val.design4} 
                                    design5={val.design5} 
                                    design6={val.design6} 
                                    design7={val.design7} 
                                    design8={val.design8} 
                                    />
                                );
                            })}
                            
                

                   
                    

                </div>
                <ul className='price-policy'>
                                <ul>All prices are in $AUD, include GST, are current from September 1st 2021.
<ul>Prices are subject to change without notice.</ul>
<ul>We prefer to quote on services prior to commitment.</ul>
<ul>We accepts Visa, Mastercard, EFTPOS and Cash. Cheques are not accepted.
24 hour cancellation notice required.</ul>
                                </ul>
                            </ul>
        </div>
       
   
  )
}

export default Prices