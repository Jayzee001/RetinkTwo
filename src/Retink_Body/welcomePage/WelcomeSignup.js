import React from 'react';
import './retink.css'
// import reLogo from '../Asset/Retink-logo.avif';
import reLogo from '../../Asset/Logoretinklogo.svg'
import babyDog from '../../Asset/Retink dog-dull.png';
import Boost from './Boost';

const welcomeSignup = () => {
  return (
      <div className='welcome'>
        <span className='logo' >
            <img src={reLogo} alt='logo' />
          </span>
        <div className='advanced'>
            <div className='aii'>
                <h1 className='ai'>
                    Get Advanced AI <br />+ Expert Created  
                <span className='logos' style={{color: '#7E1CFE', textShadow:'none'}}> Logos</span>
                </h1>
                
            </div>
            <div className='puppy'>
        <img className='image' src={babyDog} alt= ' puppy_image' />
            </div>
          </div>
        <div className='boost'><Boost /></div>
    </div>
  )
}

export default welcomeSignup
