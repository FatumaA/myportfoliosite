import React from 'react'
import {ProjectsInfo} from './Data'

const Projects = () => {
  return (
    <div id='projects'>
      <h5>{ProjectsInfo.tagLine}</h5>
      <h1>{ProjectsInfo.headLine}</h1>
      <div clasName='card-grid'>
        
        <div className='card-1'>
          <img src={} alt='screenshot'/>
          <p>{ProjectsInfo.DescProjectAPI}</p>
          <a href='https://github.com/FatumaA/symptom-checker' target='_blank'> 
            View Source Code
          </a>
        </div>
        
        <div className='card-2'>
          <img src={} alt='screenshot'/>
          <p>{ProjectsInfo.DescPortfolio}</p>
          <a href='' target='_blank' />
        </div>
        

      </div>
    </div>
  )
}

export default Projects
