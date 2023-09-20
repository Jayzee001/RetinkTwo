import React from 'react'
//import the fragments of components
import Search from './Search'
import Midnav from './midNav';
import Right from './rightNav'
//styling
import './nav.css'

const Nav = () => {
  return (
    <div className='nav'>
          <div className='search_input'>
            <div style={{width:'70%'}}>
                <Search />
            </div>
            <div style={{width:'30%'}}>
                <Midnav />
            </div>
        </div>
        <div className='right_nav'>
            <Right />
        </div>
      <div className='mobile'>
        <div style={{width:'70%'}}>
                <Search />
            </div>
        </div>
    
      </div>
  )
}

export default Nav
