import React from 'react'
import { FaCalendar, FaBell } from 'react-icons/fa'
import pic from '../../Asset/ope.jpg'

const rightNav = () => {
  return (
    <div className='righty'>
        <span className='curs' style={{color:'#ccc', width:'30%'}}><FaCalendar /></span>
        <span  className='curs' style={{color:'#ccc', width:'30%', hoverBackground:'#5E3EBA'}}><FaBell /></span>
        <span className='cur' style={{ width:'30%', cursor:'pointer'}}>
            <img style={{ borderRadius:'10%'}} className='photo' src={pic} alt='pics' />
        </span>
    </div>
  )
}

export default rightNav
