import React from 'react';
import { tabs } from '../../dummydata'
import './body.css'

const Body = () => {
    return (
        <div>
        <h2>
            Social media
        </h2>
        <div className='tags'>
        {
            tabs.slice(2, 6).map((tab) => (
                <div className='tablet'>
                <span className='tab_top'>
            <span style={{ display: 'flex', justifyContent: 'left', width:'7rem', height:'20px', alignItems:'center' }}>
                    {tab.icons}
                    </span>
                    <span style={{ display: 'flex', justifyContent: 'right', width:'7rem', height:'20px', alignItems:'center' }}>
                    {tab.iconTwo}
                </span>
                </span>
                <span className='title'>
                    <h4>
                        {tab.title}
                    </h4>
                    </span>
                    <span className='titles'>
                        <p>
                            {tab.write}
                        </p>
                </span>
            </div>
            ))
        }
            </div>
        </div>
  )
}

export default Body
