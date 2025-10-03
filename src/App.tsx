import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Test from './components/Test'
import Nav from './components/Nav'


function App() {

  return (
    <>
    <Nav />
    <span id='home'></span>
    <div className="container">
      
      <Hero />
       <span id='projects.'></span>
      <Projects />
      <Test />

    </div>
    </>
  )
}

export default App
