//this is for the categories with 5 grid in them


import React from 'react'
import { ourAbility } from '../../dummydata'
import './card.css'

const Transformer = () => {
  return (
      <div className="container">
        {ourAbility.map((card) => (
            <div className="cards">
                <div data-aos="zoom-out-down">
                <div className="logos">
                    <span>
                        <img src={card.icon}  alt='pics'/>
                    </span>
                </div>
            <div className='title'>
                <span class>
                    <p className='titlle'>
                        <b style={{color:'black', fontSize:'20px'}}>
                            {card.title}
                        </b>
                        </p>
                    </span>
                </div>
                <div className='describe'>
                    <p>
                        {card.describe}
                    </p>
                </div>
            </div>
            </div>
        )
            )
        }
    </div>
  )
}

export default Transformer
