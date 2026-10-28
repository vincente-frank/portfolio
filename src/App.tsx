import './App.css'
import About from './components/about'
import FAQ from './components/faq'
import Hero from './components/hero'
import Projects from './components/projects'
import Services from './components/services'
import Together from './components/together'






const App = () => {

  return (

    <div className='overflow-x-hidden bg-charcoal-brown
    font-charon '>
      
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <FAQ/>
      <Together/>

    </div>

  )

}

export default App

