import React from 'react'
import {HeroInfo} from './Data'
import Button from './Button'

const Hero = () => {
  return (
    <div id='home'>
      <div className='hero-section'>
      <div className='hero-wrapper-text'>
      <h5>{HeroInfo.tagLine}</h5>
      <h1>{HeroInfo.headLine}</h1>
      <p>{HeroInfo.subHeadLine}</p>
      </div>

      <div className='hero-wrapper-image'>
      <img src={HeroInfo.Img} alt='hero'/>
      </div>
      </div>

      <Button/>
    </div>
    
    
  )
}

export default Hero
