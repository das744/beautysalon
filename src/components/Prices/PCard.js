import React from 'react'


const PCard = (props) => {
  return (
    <div>

        <div className="prices-card">
            <div className="card">
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <ul>
                        <li>{props.design1}</li>
                        <li>{props.design2}</li>
                        <li>{props.design3}</li>
                        <li>{props.design4}</li>
                        <li>{props.design5}</li>
                        <li>{props.design6}</li>
                        <li>{props.design7}</li>
                        <li>{props.design8}</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PCard