import {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import OtherProjects from './components/OtherProjects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner';
import MobileNav from './components/MobileNav';

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  let breakpoint = 775

  
  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth)
  //   window.addEventListener("resize", handleWindowResize)

  //   return () => window.removeEventListener("resize", handleWindowResize)

  // },[])
  
  return (
    <>
    {/* <Navbar className={width <= breakpoint ? 'nav-MobBackground' : 'nav-background'}/> */}
    {/* <Navbar/> */}
    {width <= breakpoint ? <MobileNav/> : <Navbar/>}
    <Hero />
    <Banner/>
    <Projects />
    <OtherProjects/>
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default App;
