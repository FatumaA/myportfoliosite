import React from 'react'
import {ProjectsInfo, ScreenshotsInfo} from './Data'

const Projects = () => {
  return (
    <div id='projects' className='projects-main-container'>
      <h5>{ProjectsInfo.tagLine}</h5>
      <h1>{ProjectsInfo.headLine}</h1>
      
      <div className='hero-section'>
        
        <div className='card'>
          <a href='https://peaceful-raman-a2c62f.netlify.app/' alt='screenshot' target='_blank' rel='noreferrer'>
          <img src={ScreenshotsInfo.medic} alt='screenshot'/>
          </a>
          <p>{ProjectsInfo.DescProjectAPI}</p>
          <a href='https://github.com/FatumaA/symptom-checker' target='_blank' rel='noreferrer'> 
           {ProjectsInfo.linkText}
          </a>
        </div>
        
        <div className='card'>
        <a href='https://www.shedevelops.dev/' alt='screenshot' target='_blank' rel='noreferrer'>
          <img src={ScreenshotsInfo.folio} alt='screenshot'/>
          </a>
          <p>{ProjectsInfo.DescPortfolio}</p>
          <a href='https://github.com/FatumaA/myportfoliosite' target='_blank' rel='noreferrer'>
          {ProjectsInfo.linkText}
          </a>
        </div>
        
      </div>

    </div>
  )
}

export default Projects
