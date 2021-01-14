import React, {useState} from 'react'
import logo from '../logo.png'
import {GoThreeBars} from 'react-icons/go';
import {BrowserRouter as Router} from 'react-router-dom'

const MobileNav = () => {

  const [click, setClick] = useState(false);
  
  const onClick = () => {
        setClick(!click)
  }
  
  return (
    <>
    <Router>
    <nav className='nav-background'>
                <a href='/' alt='logo'> 
                <img src={logo} alt='logo'className='logo'/>
                </a>

          <ul style={{transform:click ? "translateX(0)" :  "translateX(500px)"}}> 
               
                <a href='#home'className='nav-links' onClick={onClick}>
                <li >
                Home 
                </li> </a>

                <a href='#about' className='nav-links' onClick={onClick}>
                <li > 
                About 
                </li>  </a>

                <a href='#projects' className='nav-links' onClick={onClick}>
                <li > 
                Projects 
                </li> </a>

                <a href='#contact' className='nav-links' onClick={onClick}> 
                <li > 
                Contact 
                </li> </a>   
                   
          </ul>

            <GoThreeBars className='menu-icon' onClick={onClick}/>
        </nav> 

        </Router>
    
    </>
  )
}

export default MobileNav
