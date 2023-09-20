import React from 'react'
import './retik.css';

const SignUp = () => {
  return (
    <div className='form'>
      <h6 style={{
        fontSize:'20px'
      }}><b>Sign Up For BETA to see more</b></h6>
      <form>
        <span className='input'>
        <input type="text" placeholder="Busness Name" />
          <input type="email" placeholder="Email" />
        </span>
        <button className='btn'>
          <span className='nn'>N</span>
          otify Me
        </button>
      </form>
      <button className='link'>
        Sign Up as a freelance partner
      </button>
    </div>
  )
}

export default SignUp
