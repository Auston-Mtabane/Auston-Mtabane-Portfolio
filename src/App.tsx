import './App.css'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Test from './components/Test'
import Nav from './components/Nav'


function App() {

  return (
    <>
    <Nav />
    <span id='home'></span>
    <div className="container">
      
      <Profile />
      <Projects />
      <Test />

    </div>
    </>
  )
}

export default App
