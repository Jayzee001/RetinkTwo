import React from 'react'
import {category} from '../../dummydata'
import './cater.css'

const FadeRi = () => {
  return (
    <div className='tabs'>
        {
            category.slice(3, 6).map((tabs) => (
                <div className='tab'>
                    <img style={{ height: '10rem', width: '16rem', margin: '10px' }} src={tabs.display} alt='logo pics' />
                    <h6 style={{margin:'1rem', fontSize: '20px', color:'black', marginBottom:'0'}}>{tabs.title}</h6>
<div style={{height:'3px',width:'7rem', backgroundColor:'#7E1CFE', margin:'8px'}} className='line'></div>
                    <span>
                        <p>
                            {
                                tabs.describe
                            }
                        </p>
                    </span>
                </div>
            ))
        }
    </div>
  )
}

export default FadeRi
