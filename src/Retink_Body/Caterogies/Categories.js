//this is for the categories with 5 grid in them

import React from 'react'
import FadeL from './FadeLe'
import FadeR from './FadeRi'

const Categories = () => {
  return (
    <div className='tabs_container'>
      <div className='transform'>
        <div className='ami' data-aos="fade-up-right">
        <div className='top_trans'>
          <h6 style={{ fontSize: '28px', textAlign: 'center' }}><b>Transform your Creation Process</b></h6>
          <p>With a new approach to ordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand
          </p>
        </div>
        </div>
        <div className='ami' data-aos="fade-up-left">
          <div className='top_trans'>
            <h6 style={{ fontSize: '28px', textAlign: 'center' }}><b>Activate your business growth with Retink Content. </b></h6>
            <p>Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like:</p>
          </div>
        </div>
      </div>
      <div className='left_ami'>
        <div data-aos="fade-left">
          <FadeL />
        </div>
      </div>
      <div className='right_ami'>
        <div data-aos="fade-right">
          <FadeR />
        </div>
      </div>
    </div>
  )
}

export default Categories
