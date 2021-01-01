import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import OtherProjects from './components/OtherProjects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner';

function App() {
  return (
    <>
    <Navbar />
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
