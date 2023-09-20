import React from 'react'
import {TbCoinPound} from 'react-icons/tb'

const MidNav = () => {
  return (
    <div className="mid">
        <div style={{display: 'flex',}} className="mid_cont">
            <button className="purple_btn">
                Create Content
            </button>
            <button className='small_btn'>
                <span style={{color: 'grey'}}>
                    <TbCoinPound />
                </span>
                20
            </button>
        </div>
    </div>
  )
}

export default MidNav
