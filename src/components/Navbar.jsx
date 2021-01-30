import logo from '../logo.png'
import {BrowserRouter as Router} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
    <Router>
    <nav className='nav-background'>
                <a href='/' alt='logo'> 
                <img src={logo} alt='logo'className='logo'/>
                </a>

          <ul> 
                <a href='#home'className='nav-links' >
                <li >
                Home 
                </li> </a>

                <a href='#about' className='nav-links' >
                <li > 
                About 
                </li>  </a>

                <a href='#projects' className='nav-links' >
                <li > 
                Projects 
                </li> </a>

                <a href='#contact' className='nav-links'> 
                <li > 
                Contact 
                </li> </a>   
                   
          </ul>
           
        </nav> 

        </Router>
    
    </>
  )
}

export default Navbar