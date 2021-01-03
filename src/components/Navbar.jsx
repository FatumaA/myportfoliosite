import React, {useState} from 'react'
import logo from '../logo.png'
import {GoThreeBars} from 'react-icons/go';
import {BrowserRouter as Router} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

const Navbar = () => {

  const [click, setClick] = useState(false);
  
  return (
    <>
    <Router>
        <nav className='nav-background'>
                <a href='/' alt='logo'> 
                <img src={logo} alt='logo'className='logo'/>
                </a>
            

            <ul>
            
                <li > <Link  smooth to="/#home"
                        className='nav-links' 
                        style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> Home </Link></li>    
                <li><Link smooth to="/#about"
                        className='nav-links' 
                        style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> About </Link></li>      
                <li><Link smooth to="/#projects"
                        className='nav-links' 
                        style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> Projects </Link></li>       
                <li><Link  smooth to="/#contact"
                        className='nav-links' 
                        style={{transform:click ? "translateX(0)": "translateX(500px)"}} 
                        exact> Contact</Link></li>      

            </ul>
            

            <GoThreeBars className='menu-icon' 
            onClick={() => setClick(!click)}
            />
        </nav>
        </Router>

    
     
      
    
    </>
  )
}

export default Navbar
