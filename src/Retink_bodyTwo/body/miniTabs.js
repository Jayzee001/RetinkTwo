import React from 'react'
import './body.css';
import Body from './Body'
import Lower from './Lower'
import {MdAdd} from 'react-icons/md'


const miniTabs = () => {
  return (
    <div className='main_body'>
      <div className='top_body'>
        <span className='top_header'>
          <h3 style={{fontSize:'20px',}}>
            Most Popular Tools
          </h3>
        </span>
        <span className='low_header'>
          <p>
            Explore the trending tools to create your copies fast
          </p>
        </span>
      </div>
      <div className='tag'>
        <Body />
        <Lower />
      </div>
      <div className='button'>
        <span style={{width:'7rem'}}>Article writing</span>
        <button style={{ backgroundColor: '#5E3EBA', height:'3rem', width:'3rem', borderRadius: '5px'}} >
    <MdAdd />
  </button>
      </div>
    </div>
  )
}

export default miniTabs
