import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/services'
import News from './components/News'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="heading-container">
        <div className="animation-container">
            <div className="bg-animation"></div>
        </div>
        <Navbar />
        <Hero />
      </div>

      <Services />
      <News />
      <Footer />
    </div>
  )
}

export default App
