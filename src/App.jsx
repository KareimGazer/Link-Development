import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/services'
import News from './components/News'
import Footer from './components/Footer'
import './App.css'

import { useState, useEffect } from "react";
import {getSlides} from './utils'

function App() {

  const [index, setIndex] = useState(0)
  const [data, setData] = useState([])

  // let color = data[index] ? data[index].color : 'black'
  let color = data[index]?.colorCode || 'black'

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getSlides()
              setData(data)
          }
          catch (error) {
              console.error(error)
          }
      }
      fetchData()
  }, [])

  return (
    <div className="app">
      <div className="heading-container">
        <div className="animation-container">
            <div className="bg-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="822.575" height="912.383" viewBox="0 0 822.575 912.383">
                  <g id="Decore" transform="translate(-1)">
                    <path style={{fill: `#${color}`}} id="Top_Nav_Decore" data-name="Top Nav Decore" d="M493.381,172.014c-52.718-3.106-102.99-31.189-150.9-62.107S246.987,44.832,195.572,28.491C162.492,17.959,124.6,16.473,97.96,45.909,72.294,74.257,63.984,122.994,59.5,168.363c-3.34,34.161-5.3,69.938,3.912,101.951C69.77,292.458,81.086,311.087,89,332.421c27.3,73.853,7.985,164.991-21.6,237.087-13.852,33.89-29.9,66.16-40.659,102.208S11.1,749.084,20.467,785.8c9.288,36.453,31.369,63.727,55.325,83.036,48.653,39.154,105.924,50.227,161.818,56.572,123.686,14.042,248.1,7.954,372.117,1.891,45.873-2.3,91.989-4.591,137.13-16.338,25.09-6.482,51.007-16.876,69.177-41.854,23.14-31.728,28.843-85.6,13.363-125.429-25.991-66.832-97.775-83.441-115.945-155.132-10.021-39.425.244-83.441,14.836-120.028,31.125-78.578,83.343-147.439,86.125-237.225,1.874-61.7-23.223-123.4-62.005-152.565C711.746,48.2,655.28,51.986,625.3,102.6,594.252,154.588,539.9,174.708,493.381,172.014Z" transform="translate(-14.497 -21.593)" opacity="0.1"/>
                  </g>
                </svg>
            </div>
        </div>
        <Navbar />
        <Hero data={data} index={index} setIndex={setIndex}/>
      </div>
      <Services />
      <News />
      <Footer />
    </div>
  )
}

export default App
