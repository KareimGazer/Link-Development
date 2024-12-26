import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { useState, useEffect } from "react";
import {getSlides} from '../../utils'
import './Hero.css';

const Hero = () => {
    const [index, setIndex] = useState(0)
    const [data, setData] = useState([])

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
        <main className="grid-container grid-container--hero flow">
            <div className="indicators">
                <button className='indicator active'><span className="sr-only active">marking</span></button>
                <button className='indicator'><span className="sr-only">crafty</span></button>
                <button className='indicator'><span className="sr-only">outsource</span></button>
            </div>
            <article className="hero-details flow">
            <header className="flow">
                <p className="hero__subtitle">marketing</p>
                <h1 className="hero__title">25 Years of Business Growth</h1>
            </header>
                <p className="hero__desc">
                    Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.
                </p>

                <div className='hero__cta indicators'>
                    <a href="#" className="info-btn cta-btn">Find out more</a>
                    <a href="#" className="video-btn cta-btn"><SiGoogledisplayandvideo360 /></a>
                </div>
            </article>

            <picture>
                <source srcSet="/people/boy.webp" type="image/webp"/>
                <img src="/people/boy.png" alt="Douglas Hurley"/>
            </picture>
        </main>
    );
}

export default Hero;
