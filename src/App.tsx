import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {

  return (
    <>
    <Nav />
    <span id='home'></span>
    <div className="container">
      
      <Hero />
       <span id='projects.'></span>
      <Projects />
      <span id='About'></span>
      <AboutMe/>
      <span id='contact'></span>
      <Contact/>
      <Footer />
      


    </div>
    </>
  )
}

export default App
