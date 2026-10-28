import './App.css'
import About from './components/about'
import Hero from './components/hero'
import Projects from './components/projects'
import Services from './components/services'
import Testimonials from './components/testimonials'






const App = () => {

  return (

    <div className='overflow-x-hidden bg-charcoal-brown
    font-charon '>
      
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Testimonials/>

    </div>

  )

}

export default App

