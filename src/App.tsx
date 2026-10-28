import './App.css'
import About from './components/about'
import Contacts from './components/contacts'
import FAQ from './components/faq'
import Footer from './components/footer'
import Hero from './components/hero'
import Projects from './components/projects'
import Services from './components/services'
import Together from './components/together'
import Wasap from './components/wasap'






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
      <Contacts/>
      <Footer/>
      <Wasap/>

    </div>

  )

}

export default App

