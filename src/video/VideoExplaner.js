import React from 'react'
import './vid.css';

const VideoExplaner = () => {
  return (
    <div className='vid'>
      <div className='heading'>
        <h1 className='title'>Explainer Video</h1>
      </div>
      <div data-aos="zoom-out-down">
      <span className='video'>
        <iframe style={{borderRadius:'2%'}} width="720" height="440" src="https://www.youtube.com/embed/eMIZq2TpOYU?si=W6ijKSejc11w9QYP&amp;start=52" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </span>
    </div>
    </div>
  )
}

export default VideoExplaner
