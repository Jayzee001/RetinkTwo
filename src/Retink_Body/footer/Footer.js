import React from 'react'
import './footer.css'
import logo from '../../Asset/Logoretinklogo.svg'
import SocailIcons from './socailIcons'
import Bottom from './Bottom'



const Footer = () => {
  return (
      <div className='footer'>
          <div className='top'>
            <div className='logo'>
                <img src={logo} alt='logo' />
              </div>
            <div className='social'>
          <div className='locate'>
            <span className='sub_locate'>
              <h3>Product by Retink Media UG</h3>
            </span>
            <span className='sub_locate'>
              <h3>Bonn, Germany</h3>
            </span>
          </div>
          <div className='locate'>
            <span className='sub_locate'>
              <h3>Get Early Access</h3>
            </span>
            <span className='sub_locate'>
              <h3>Provide Feedback</h3>
            </span>
          </div>
          <div className='locate'>
            <span className='sub_locate'>
              <h3>Connect with us</h3>
            </span>
            <span className='sub_locate'>
              <SocailIcons />
            </span>
          </div>
          
        </div>
        </div>
        <div className='bottom'>
        <div><Bottom /></div>
        </div>

    </div>
  )
}

export default Footer
