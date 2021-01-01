import React from 'react'
import {ProjectsInfo, ScreenshotsInfo} from './Data'

const OtherProjects = () => {
  return (
    <div className='other-projects-main-container'>
      <h5>{ProjectsInfo.tagLineWP}</h5>
      <h1>{ProjectsInfo.headLineWP}</h1>
      
      <div className='hero-section'>
        
        <div className='card'>
        <a href='https://thegrindcafe.co.ke/' alt='screenshot' target='_blank' rel='noreferrer'>
          <img src={ScreenshotsInfo.grind} alt='screenshot'/>
          </a>
        <p>{ProjectsInfo.DescGrind}</p>
        <a href='https://thegrindcafe.co.ke' target='_blank' rel='noreferrer'>
          {ProjectsInfo.linkTextWP}
        </a>
        </div>
        
        <div className='card'>
        <a href='https://motionauto.co.ke/' alt='screenshot' target='_blank' rel='noreferrer'>
          <img src={ScreenshotsInfo.motion} alt='screenshot'/>
          </a>
        <p>{ProjectsInfo.DescMotion}</p>
        <a href='https://motionauto.co.ke' target='_blank' rel='noreferrer'>
          {ProjectsInfo.linkTextWP}
        </a>
        </div>
        
    </div>

      </div>
  )
}
export default OtherProjects