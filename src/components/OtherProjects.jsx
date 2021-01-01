import React from 'react'
import {ProjectsInfo} from './Data'

export const OtherProjects = () => {
  return (
    <>
      <h5>{ProjectsInfo.tagLineWP}</h5>
      <h1>{ProjectsInfo.headLineWP}</h1>
      <div clasName='card-grid'>
        
        <div className='card-1'>
        <img src={} alt='screenshot'/>
        <p>{ProjectsInfo.DescGrind}</p>
        <a href='' target='_blank' />
        </div>
        
        <div className='card-2'>
        <img src={} alt='screenshot'/>
        <p>{ProjectsInfo.DescMotion}</p>
        <a href='' target='_blank' />
        </div>
        

      </div>
    </>
  )
}
