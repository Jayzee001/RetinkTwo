import React from 'react'
// import pic from '../../Asset/Frame 24234408.jpg'
import './body.css'

const Head = () => {
  const name = 'James'
  return (
    <div className='frame'>
      <div className='name'>
        <div style={{width:'50%', height:'4rem', marginLeft:'1rem', overflow:'visible', wordWrap:'none'}} className='names'>
          <h1 style={{fontSize:'34px', textAlign:'left', margin:'1rem'}}>
          Hey {name}
        </h1>
        <p>
            Lets create something awesome today ✨💫
        </p>
        </div>
        <div className='ordered'>
          <select name="options" id="">
	  <option value="Article">Article</option>
    <option value="Blog">Blog</option>
    <option value="Projects">Projects</option>
      <option value="Tasks">Tasks</option>
          </select>
        </div>
      </div>
      <div className='namee'>
                <div className='ordered'>
          <select name="options" id="">
	  <option value="Article">Article</option>
    <option value="Blog">Blog</option>
    <option value="Projects">Projects</option>
      <option value="Tasks">Tasks</option>
          </select>
        </div>
        <div  className='names'>
          <h1  className='heading'>
          Hey {name}
        </h1>
        <p>
            Lets create something awesome today ✨💫
        </p>
        </div>
      </div>
      <button className='header_btn'>
        More details
      </button>
    </div>
  )
}

export default Head
