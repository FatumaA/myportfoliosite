import React from 'react'
import logo from '../images/logo.png'
import {GoThreeBars} from 'react-icons/go';
import {BrowserRouter as Router} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

const Navbar = () => {
  return (
    <>
    <Router>
        <nav className='nav-background'>
                <div className='nav-wrapper-logo'>
                <a href='/' alt='logo'> 
                <img src={logo} alt='logo'className='logo'/>
                </a>
                </div>
            <div className='nav-links-wrapper'>

            <ul>
            
                <li> <Link  smooth to="/#home"
                        className='nav-links' 
                        // style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> Home </Link></li>    
                <li><Link smooth to="/#about"
                        className='nav-links' 
                        // style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> About </Link></li>      
                <li><Link smooth to="/#projects"
                        className='nav-links' 
                        // style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> Projects </Link></li>       
                <li><Link  smooth to="/#contact"
                        className='nav-links' 
                        // style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> Contact</Link></li>      
                
            </ul>
            </div> 

            {/* <GoThreeBars className='menu-icon' 
            // onClick={() => setClick(!click)}
            /> */}
        </nav>
        </Router>

    
     
      
    
    </>
  )
}

export default Navbar
