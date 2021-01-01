import React from 'react'
import {BannerInfo} from './Data'

const Banner = () => {
  return (
    <div>
      <div className='grid-banner'>
      <div className='banner-wrapper-image'>
      <img src={BannerInfo.html} alt='hero'/>
      </div>

      <div className='banner-wrapper-image'>
      <img src={BannerInfo.css} alt='hero'/>
      </div>

      <div className='banner-wrapper-image'>
      <img src={BannerInfo.react} alt='hero'/>
      </div>

      <div className='banner-wrapper-image'>
      <img src={BannerInfo.javascript} alt='hero'/>
      </div>

      <div className='banner-wrapper-image'>
      <img src={BannerInfo.sass} alt='hero'/>
      </div>
      </div>
    </div>
  )
}

export default Banner
