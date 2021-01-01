import React from 'react'
import {AboutInfo} from './Data'
import {ButtonInfo} from './Data'

const About = () => {
  return (
    <div id='about' className='about-main-container'> 
      <div className='hero-section'>
      <div className='hero-wrapper-text'>
      <h5>{AboutInfo.tagLine}</h5>
      <h1>{AboutInfo.headLine}</h1>
      <p>{AboutInfo.subHeadLine}</p>
      <button className='btn-primary'>
        {ButtonInfo.about}
      </button>
      </div>

      <div className='hero-wrapper-image'>
      <img src={AboutInfo.Img} alt='hero' />
      </div>
      </div>

     
    </div>
  )
}

export default About
