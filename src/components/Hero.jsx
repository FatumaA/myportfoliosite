import React from 'react'
import {HeroInfo} from './Data'
import {ButtonInfo} from './Data'

const Hero = () => {
  return (
    <div id='home' className='hero-main-container'>
      <div className='hero-section'>
      <div className='hero-wrapper-text'>
      <h5>{HeroInfo.tagLine}</h5>
      <h1>{HeroInfo.headLine}</h1>
      <p>{HeroInfo.subHeadLine}</p>

      <a href='/#projects'> 
      <button  className='btn-primary'>
        {ButtonInfo.hero}
      </button>
      </a>

    </div>
      

      <div className='hero-wrapper-image'>
      <img src={HeroInfo.Img} alt='hero' />
      </div>
      </div>

    </div> 
    
    
  )
}

export default Hero
